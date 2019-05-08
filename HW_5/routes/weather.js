express = require('express');
router = express.Router();
const request = require('request');
const Accuweather = require('../Config/Accuweather.json');
let db = require('../mongo/mongo');
const base = "http://localhost:4200/";

/* GET home page. */
router.get('/search/:place', function(req, res, next) {
    place = req.params.place;
    api_key = Accuweather.Accuweather.key;
    api = 'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
    api += api_key;
    api += '&q=';
    api += place;
    api += '&alias=NY HTTP/1.1';

    request(api, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        let uid = req.headers.uid;
        let userData = { uid: uid };

        let tokenData = {
            user: userData
        };

        let token = jwt.sign(tokenData,
            '--some-secret-here--');
        res.cookie('_accessToken', uid, { domain: base, path: '/search', httpOnly: true});

        let weather = response.body;
        if (weather[0] == undefined){
            res.json();
            return;
        }
        let favorite_name = weather[0].LocalizedName;
        //update objects with data for user when googleId == uid
        db.getDB().collection('users').updateOne(
            {googleId: uid},
            {$push :
                {favorites: favorite_name}
            });
        res.json(body);
    });
});


module.exports = router;

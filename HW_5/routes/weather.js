express = require('express');
router = express.Router();
const request = require('request');
const Accuweather = require('../Config/Accuweather.json');
let db = require('../mongo/mongo');

/* GET home page. */
router.get('/search/:place', function(req, res, next) {
    //if (req.user){
        place = req.params.place;
        api_key = Accuweather.Accuweather.key;
        api = 'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
        api += api_key;
        api += '&q=';
        api += place;
        api += '&alias=NY HTTP/1.1';

        request(api, { json: true }, (err, response, body) => {
            if (err) { return console.log(err); }
            uid = req.user;
            let weather = response.body;
            if (weather == undefined){
                //do something on error
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
    // }
    // else{
    //     let redirect_url = "http://localhost:3000/hw4/auth/google";
    //     res.redirect(redirect_url);
    // }
});


module.exports = router;

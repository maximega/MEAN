express = require('express');
router = express.Router();
const request = require('request');
const Accuweather = require('../Config/Accuweather.json');

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
        res.json(body);
    });
});

module.exports = router;

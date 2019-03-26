express = require('express');
router = express.Router();
const request = require('request');
const Accuweather = require('../Config/Accuweather.json')

/* GET home page. */
router.get('/', function(req, res, next) {
    api_key = Accuweather.Accuweather.key;
    api = 'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
    api += api_key;
    api += 'New%20York&alias=NY HTTP/1.1';
    request(api, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        res.render('weather', { title: 'New York ', json: body});
    });
});

module.exports = router;

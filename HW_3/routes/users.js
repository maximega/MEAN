express = require('express');
router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/users/:name', function(req, res, next) {
    let name = req.params.name;
    let obj = {};
    if(name === "Randy"){
        obj = {favorite : ["Boston", "Milwakee", "Orlando"]};
    }
    else if(name === "Josh"){
        obj = {favorite : ["New York", "Washington D.C", "Miami"]};
    }
    else if(name === "Sarah"){
        obj = {favorite : ["Seattle", "Portland", "Denver"]};
    }
    else if(name === "Seven"){
        obj = {favorite : ["Chicago", "San Fransisco", "Houston"]};
    }
    else{
        obj = {favorite : ["NA"]};
    }
    console.log(obj)
    res.json(obj);
});

module.exports = router;

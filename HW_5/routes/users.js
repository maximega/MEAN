express = require('express');
router = express.Router();
let db = require('../mongo/mongo');


router.get('/user', function(req, res, next) {
    let uid = req.headers.uid;
    uid = '106511058171512626817';
    //update objects with data for user when googleId == uid
    db.getDB().collection('users').find(
        {googleId: uid},
        {projection : {_id : 0, favorites : 1}}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result[0]['favorites']);
        });
});

router.get('/user/delete/:cityName', function(req, res, next) {
    let cityName = req.params.cityName;

    let uid = req.headers.uid;
    uid = '106511058171512626817';
    //update objects with data for user when googleId == uid
    db.getDB().collection('users').updateOne(
        {googleId: uid},
        {$pull: {favorites : cityName}});

    db.getDB().collection('users').findOne(
        {googleId: uid}, function(err, result){
            if (err) throw err;
            console.log(result);
            res.json(result['favorites']);
    });

});

module.exports = router;

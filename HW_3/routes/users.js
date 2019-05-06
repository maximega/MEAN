express = require('express');
router = express.Router();
let db = require('../mongo/mongo');


router.get('/user', function(req, res, next) {
    //query db for all items user searched for use userID
    //if (req.user){

    let uid = req.user;
    console.log(uid);
    //update objects with data for user when googleId == uid
    db.getDB().collection('users').find(
        {googleId: uid},
        {projection : {_id : 0, favorites : 1}}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result["favorites"]);
        });
    // }
    // else{
    //     let redirect_url = "http://localhost:3000/hw4/auth/google";
    //     res.redirect(redirect_url);
    // }
});

router.get('/user/delete/:cityName', function(req, res, next) {
    // if (req.user){
    let cityName = req.params.cityName;

    let uid = req.user;
    //update objects with data for user when googleId == uid
    db.getDB().collection('users').updateOne(
        {googleId: uid},
        {$pull: {favorites : cityName}});
    db.getDB().collection('users').findOne(
        {googleId: uid}, function(err, result){
            if (err) throw err;
            res.json(result["favorites"]); //how do I not return from here?
    });
    // }
    // else{
    //     let redirect_url = "http://localhost:3000/hw4/auth/google";
    //     res.redirect(redirect_url);
    // }
});

module.exports = router;

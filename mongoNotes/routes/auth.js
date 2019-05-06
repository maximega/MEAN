const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ]}));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res){
        console.log(req.user);
        res.render('index', { user: req.user.givenName + req.user.familyName });
    });

router.get('/logout', function(req, res, next){
    req.logout();
    //if req.authenticated()
    //req.login()
    //remove from db
    res.render(index, {user : req.user});
});

module.exports = router;


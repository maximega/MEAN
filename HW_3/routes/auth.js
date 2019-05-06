const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ]}));

router.get('/google/callback', function(req, res, next){
    passport.authenticate('google', function(err, user, info){
        if (err) return next(err);
        if (!user) {
            res.redirect("http://localhost:4200/");
        }

        var userData = { uid: user.user };

        var tokenData = {
            user: userData
        };

        var token = jwt.sign(tokenData,
            '--some-secret-here--');

        res.cookie('_accessToken', token);
        res.redirect("http://localhost:4200/search");

    })(req, res, next);
});

router.get('/logout', function(req, res, next){
    req.logout();
    //if req.authenticated()
    //req.login()
    //remove from db
    res.render(index, {user : req.user});
});

module.exports = router;


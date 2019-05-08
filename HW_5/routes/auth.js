const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const base = "http://localhost:4200/";
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

router.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ]}));

router.get('/google/callback', function(req, res, next){
    passport.authenticate('google', function(err, user, info){
        if (err) return next(err);
        if (!user) {
            res.redirect(base);
        }
        let userData = { uid: user };

        let tokenData = {
            user: userData
        };

        let token = jwt.sign(tokenData,
            '--some-secret-here--');
        //localStorage.setItem('Id_token',token);
        res.cookie('_accessToken', uid, { domain: base, path: '/search', httpOnly: true});
        res.redirect(base + "search");

    })(req, res, next);
});

router.get('/logout', function(req, res, next){
    req.logout();
    res.render(base);
});

module.exports = router;


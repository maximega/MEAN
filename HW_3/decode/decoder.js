const jwt = require('jsonwebtoken');

function decodeJWT(req, res, next) {
    let token = req.headers['x-access-token'];

    if (token) {
        try {
            let decoded = jwt.verify(token, '--some-secret-here--');

            req.principal = {
                isAuthenticated: true,
                user: decoded.user
            };
            return next();

        } catch (err) { console.log('ERROR when parsing access token.', err); }
    }

    return res.status(401).json({ error: 'Invalid access token!' });
}

module.exports = decodeJWT;

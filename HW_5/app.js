var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var weatherRouter = require('./routes/weather');
var userRouter = require('./routes/users');
var authRouter = require('./routes/auth');

let db = require('./mongo/mongo');
db.connect( (err, client) => {
  if (err){console.log(`ERR: ${err}`);}
  else {console.log('connected')}
});

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

let googleConfig = require('./Config/google');
let passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
      clientID: googleConfig.clientID,
      clientSecret: googleConfig.clientSecret,
      callbackURL: googleConfig.callbackURL,
      passReqToCallback   : true
    },
    function(req, accessToken, refreshToken, profile, cb){
        db.getDB().collection('users').findOne({"googleId": profile.id}, function(err, result) {
            if (err) throw err;
            if(!result){
                db.getDB().collection('users').insertOne(
                    {googleId: profile.id, favorites: []},
                    function(err, user){
                        return cb(err, profile.id);
                    })
            }
            else{
                return cb(err, profile.id);
            }
        });
    }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    // db.getDB().collection('users').find(
    //     {googleId: user},
    //     function(err, user){
    //         done(null, user);
    //     });
    done(null, user);
});

var app = express();

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('express-session')({
  secret: "keyboard cat",
  resave: true
}));

//initialize passport here
app.use(passport.initialize());
app.use(passport.session());

app.use('/hw5/auth', authRouter);
app.use('/hw5', userRouter);
app.use('/hw5', weatherRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

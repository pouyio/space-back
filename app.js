fs = require('fs');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var jwt    = require('jsonwebtoken');;
var token = '349620940:AAHR2E2T3WoKL7o8R0rXPSdJTBEcozMKsY8';
var articApp = require('./artic-app/app.js');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('host.key', 'utf8');
var certificate = fs.readFileSync('host.cert', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var multer  = require('multer')
var upload = multer({ dest: './' })

var passport = require('passport'), FacebookStrategy = require('passport-facebook').Strategy;




app.set('superSecret', 'hoooooooooolaJajajajja+-*/54'); // secret variable




passport.use(new FacebookStrategy({
    clientID: '785355161629723',
    clientSecret: 'c5640ae43506e9c85cf1f80a348ad72e',
    callbackURL: "https://spaceapp2017.herokuapp.com/facebookOk"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(profile);
  }
));




app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));



app.post('/upload/', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send("Ok");
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', articApp);

httpServer.listen(process.env.PORT || 80);

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




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-srf-token, X-XSRF-TOKEN");
  next();
});

var responseHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept, token",
    "access-control-max-age": 10,
    "Content-Type": "application/json"
};

app.use(function(req,res, next){
  if ( req.path.includes('/user/login') || req.path.includes('facebookOk')){
    console.log(req),
    next();

  }

  // Inside a request handler method
  if (req.method === "OPTIONS") {
    //next();
    res.writeHead(200, responseHeaders);
    res.end();
  }

  try {
    var decoded = jwt.verify(req.get('token'), 'secret');
  } catch(err) {
    res.writeHead(200, "Auth error");
  }
  console.log(decoded.data)
  next();
});




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

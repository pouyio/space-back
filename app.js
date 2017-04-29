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


app.set('superSecret', 'hoooooooooolaJajajajja+-*/54');




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-xsrf-token");
  next();
});

var responseHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept, token, Origin, X-Requested-With, x-xsrf-token",
    "access-control-max-age": 10,
    "Content-Type": "application/json"
};




app.use(function(req,res, next){
  if (req.method === "OPTIONS") {
    res.writeHead(200, responseHeaders);
    res.end();
  }else if ( req.path.includes('/user/login') ){
    next();
  }else if (req.method === "POST" && req.path.includes('user')) {
    next();
  }else{
    try {
      var decoded = jwt.verify(req.get('token'), 'secret');
      next();
    } catch(err) {
      res.writeHead(400, "Auth error");
      res.end();
    }

  }
});
app.use('/', articApp);

httpServer.listen(process.env.PORT || 80);

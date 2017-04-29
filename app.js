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

  // Inside a request handler method
  if (req.method === "OPTIONS") {
    //next();
    res.writeHead(200, responseHeaders);
    res.end();
  }else if ( req.path.includes('/user/login') || req.path.includes('facebookOk') || req.path.includes('createUser') ){
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



app.post('/upload/', upload.single('file'), function (req, res, next) {
  console.log(req.file);

  /*
  var sftp = require('./../config/ftp.js');
        sftp.connect(sftp.lunaConnection).then(() => {
            sftp.put('./userService.js', '/ftp/archivo1.txt');
        }).then((data) => {
            console.log(data, 'file ok');
        }).catch((err) => {
            console.log(err, 'catch error');
        });
  */
  res.send("Ok");
})




app.use('/', articApp);

httpServer.listen(process.env.PORT || 80);

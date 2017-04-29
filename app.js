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



//app.use(morgan('dev'));

app.post('/upload/', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send("Ok");

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', articApp);



httpServer.listen(process.env.PORT || 80);
// httpsServer.listen(443);

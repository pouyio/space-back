var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '176.9.145.158',
  user     : 'root',
  password : '179832',
  database : 'space_app'
});

connection.connect();

module.exports = connection ;

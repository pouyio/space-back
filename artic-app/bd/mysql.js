var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ArticApp'
});

// connection.connect();

module.exports = connection ;

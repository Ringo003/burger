var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});
 
connection.connect();
 
// connection.query('SELECT * FROM burgers', function (error, results) {
//   if (error) throw error;
//   console.log('The burgers is: ', results);
// });
 
connection.end();
module.exports = connection;
var mysql = require('mysql');
var database = 'JUSTICA';

var client = mysql.createConnection({
   user: 'root',
   password: '',
   host: 'localhost',
   port: 3306
});

client.query('USE ' + database);

module.exports = client;
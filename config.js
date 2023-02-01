const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.99.100', // check on your computer
  port: '3306', // default port
  user: 'root',
  password: 'root',
  database: 'supermarketStore',
});


module.exports.connection = connection;

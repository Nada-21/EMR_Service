
const mysql = require('mysql2/promise');
require('dotenv').config();
//==============================================================
// Create a connection pool
const connection = mysql.createPool({
  host: process.env.HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10, // Adjust this based on your application's needs
  queueLimit: 0
});
//==============================================================
module.exports = connection;
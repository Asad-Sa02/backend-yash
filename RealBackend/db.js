const mysql=require('mysql2/promise'); 
// import mysql from 'mysql2/promise';
// const config = require('./config');
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'W2_87376_Harsh',
  password:'Qazwsxedc8@',
  database: 'tmsdb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
 
module.exports = pool;
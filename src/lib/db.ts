import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',       // your MySQL host
  user: process.env.MYSQL_USER || 'root',              // your MySQL username
  password: process.env.MYSQL_PASSWORD || 'password',  // your MySQL password
  database: process.env.MYSQL_DATABASE || 'mydatabase',// your MySQL database name
});

export default pool;


import dotenv from 'dotenv';
dotenv.config();


const mysql = require('mysql2');
require('dotenv').config();

// Database connection configuration
const db = mysql.createConnection({
  user: 'shilpa-morisetti',
  host: '68.178.145.97',
  password: 'Welcome2data',
  database: 'Play5',
});

// Connect to the MySQL server
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server.');
});

// Note: You typically do not need to close the database connection manually in most web applications.

module.exports = db;

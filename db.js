const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',          // leave empty if you didn’t set a root password
  port: 3306,            // default MySQL port
  database: 'library_db' // make sure you created this database in Workbench
});

db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL as id " + db.threadId);
});

module.exports = db;

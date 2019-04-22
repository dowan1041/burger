var mysql = require("mysql");

// Connect to mysql database
// var connection = mysql.createConnection('mysql://fn2jlly3bc2w8s1p:acl9ltt5y92pvyqg@ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ztq7zlcq2y7etkzl');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'citysafe'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
});

module.exports = connection;

var mysql = require('mysql');

// Create a database connection and export it from this file.

// You will need to connect with the user "root", no password,

// and to the database "chat".

dbConnection = mysql.createConnection({
    user: 'root',
    password: 'plantlife',
    database: 'chat'
});

dbConnection.connect( (err) => {
    if(err){
        console.log('Error in dbConection: ', err)
        return;
    }
   
    // console.log('connect as id ' + dbConnection.threadId);
});

// dbConnection.end((err) => {

// })

module.exports = dbConnection;


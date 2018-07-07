
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('Select * from messages', function(err, results, fields){
        if(err) callback(err)
        else {
          callback(null, results);
        }
      })


    }, // a function which produces all the messages
    post: function () {
      db.query('INSERT INTO messages', function(err, results, fields){
        if(err) callback(err)
        else {
          callback(null, results);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {

    },
    post: function () {

    }
  }
};


var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if(err) res.send(err)
        else {
          res.send(results);
        }
      })
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post((err, results) => {
          if(err) res.send(err)
          else {
            res.send(results);
          }
      })
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('REQ: ', req);
    },
    post: function (req, res) {

    }
  }
};


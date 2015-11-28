var twit      = require('twit'),
    instagram = require('instagram-node-lib'),
    config    = require('./config');

module.exports = function(app, passport) {

  app.get('/api/instagram', function(req, res) {
    instagram.set('client_id', config.instagram.client_id);
    instagram.set('client_secret', config.instagram.client_secret);
    instagram.users.recent({
      user_id: '3308468',
      count: 6,
      complete: function(data, pagination){
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      },
      error: function(errorMessage, errorObject, caller){
        // console.log("--error--");
      }
    });
  });

  app.get('/api/twitter', function(req, res) {

    var twitter = new twit(config.twitter);
    var oEmbedTweets = [];
    var tweets = [];
    
    twitter.get('statuses/user_timeline', { screen_name: "SM15104", count: 5 }, 
      function (err, data, resp) {
        if(!err){
          tweets = data;
          for(var i = 0; i < tweets.length; i++) {
            getOEmbed(tweets[i]);
          }
        }else{
          res.setHeader('Content-Type', 'application/json');
          res.send({});
        }
  
      }
    );

    function getOEmbed (tweet) {
      var params = {
        "id": tweet.id_str,
        "hide_thread": true,
        "omit_script": true
      };
      twitter.get('statuses/oembed', params, function (err, data, resp) {
        tweet.oEmbed = data;
        oEmbedTweets.push(tweet);
        if (oEmbedTweets.length == tweets.length) {
          res.setHeader('Content-Type', 'application/json');
          res.send(oEmbedTweets);
        }
      });
    }
  });

  app.get('/*', function(req, res) {
    res.render('index');
  });
  
};
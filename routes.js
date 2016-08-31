var twit      = require('twit'),
    instagram = require('instagram-node-lib'),
    config    = require('./config'),
    pris      = require('prismic.io');

module.exports = function(app, passport) {

  app.get('/api/pris', function(req,res){
    pris.api('https://superiormotors.prismic.io/api',
    function (err, api) {
      api.query(pris.Predicates.at("document.type", "articles"))
        .then(function(swag){
          res.send(swag.results);
        })
    })
  })
  app.get('/api/pris/:uid', function(req,res){
    var uid = req.params.uid;
    pris.api('https://superiormotors.prismic.io/api',
    function (err, api) {
      api.getByUID('articles', uid)
        .then(function(swank){
          var htmlBody = swank.getStructuredText('articles.body').asHtml();
          res.send([{'data': swank, 'htmlBody': htmlBody}]);
        })
    })
  })

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

var cronJob = require('cron').CronJob;
var request = require('request');
var _ = require('underscore');

var urls = [
  "http://statspl.com"
];

var ping = function() {
  _.each(urls, function(url) {
    console.log("Pinging url: " + url);
    request(url, function (error, response, body) {
      // Ignore response.
    });
  });
};

new cronJob('0 */2 * * * *', function() {
  ping();
}, null, true, null);

ping()


var request = require('request');
var url = require('url');
var config = require('./config');

var axia = 'https://sandbox.axiaepay.com';

request
  .post({
    url: axia+'/gate.php',
    form: require('./form')
  }, function(err,response, body) {
    if (err) throw err;
    console.log('initial statusCode: ',response.statusCode);
    if (url.parse(response.headers.location).hostname) {
      console.log('can forward to',response.headers.location);
      request.get(response.headers.location, function(err, response, body) {
        console.log(response.statusCode);
        console.log(body);
      });
    } else {
      console.log(response);
    }
  });

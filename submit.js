var request = require('request');
var url = require('url');
var config = require('./config');

var axia = 'https://sandbox.axiaepay.com';

var form = {
  UMkey: config.Retail,
  UMredir: 'http://localhost:8080/api/paid',
  UMcard : '4000100011112224',
  UMexpir: '0915',
  UMamount : 10.00
};

request
  .post({
    url: axia+'/gate.php',
    form: form
  }, function(err,response, body) {
    if (err) throw err;
    if (url.parse(response.headers.location).hostname) {
      console.log('can forward to',response.headers.location);
    } else {
      console.log(response);
    }
  });

var chai = require('chai');
var request = require('supertest');
var superagent = require('superagent');
var expect = chai.expect;
var config = require('../config');

describe('payment api',function() {
  var url = 'http://localhost:8080';
  var axia = 'https://sandbox.axiaepay.com';

  var form = {
    UMkey: config.Retail,
    UMredir: 'http://localhost:8080/api/paid',
    UMcard : '4000100011112224',
    UMexpir: '0915',
    UMamount : 10.00
  };

  it('should be able to contact axia...',function(done) {
    this.timeout(5000);
    request('https://sandbox.axiaepay.com')
      .post('/gate.php')
      .send(form)
      .end(function(err,res) {
        expect(err).to.not.exist;
        console.log(res);
        done();
      });
  });
});

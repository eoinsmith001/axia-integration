var chai = require('chai');
var request = require('supertest');
var superagent = require('superagent');
var expect = chai.expect;
var config = require('../config');

describe('payment api',function() {
  var url = 'http://localhost:8080';
  var axia = 'https://sandbox.axiaepay.com';

  it('should be able to contact axia...',function(done) {
    this.timeout(10000);
    request('https://sandbox.axiaepay.com')
      .post('/gate.php')
      .set('Accept', 'application/json')
      .redirects(10)
      .send(require('../form'))
      .expect(204)
      .end(function(err,res) {
        expect(err).to.not.exist;
        console.log(res);
        done();
      });
  });
});

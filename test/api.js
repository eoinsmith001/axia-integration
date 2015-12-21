var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;

describe('payment api',function() {
  var url = 'http://localhost:8080';
  it('should accept a payment', function(done) {
    request(url)
      .post('/api/pay')
      .send({
        foo: 'bar'
      })
      .expect(201)
      .end(function(err,result) {
        expect(err).to.not.exist;
        done();
      });
  });
});

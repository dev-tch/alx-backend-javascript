const { expect } = require('chai');
const request = require('request');
describe('APITEST', function (){
  it('should return http response with status code 200 - api GET /available_payments', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
        done();
      }
    });
  });

  it('should return http response with status code 200 - api POST /login', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      body: JSON.stringify({userName: 'Betty'}),
      headers: {'Content-Type': 'application/json'}
    }, function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal('Welcome Betty');
        done();
      }
    });
  });
});

const { expect } = require('chai');
const request = require('request');
describe('APITEST', function (){
  it('should return http response with status code 200 if not error aoccured', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });

  it('should return http response Not Found with status code 404 if not error aoccured', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(404)
        expect(body).to.equal('Not Found');
        done();
      }
    });
  });
  it('should return http response with status code 200 - api GET /available_payments', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(200)
        expect(JSON.parse(body)).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
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
        expect(body.trim()).to.equal('Welcome Betty');
        done();
      }
    });
  });
});

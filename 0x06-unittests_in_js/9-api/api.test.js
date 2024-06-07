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

  it('should return http response Not Found with status code 400 if not error aoccured', function (done) {
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
});

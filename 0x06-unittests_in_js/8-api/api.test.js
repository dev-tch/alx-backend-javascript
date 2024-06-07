const { expect } = require('chai');
const request = require('request');
describe('APITEST', function (){
  it('should return http response with status code 200 if not error aoccured', function (done) {
    request('http://localhost:7865/', function (error, response, body) {
      if (error) {
        done(error);
      }
      else {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});

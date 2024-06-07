const { expect } = require('chai');
const request = require('request');
describe('APITEST', () => {
  it('should return http response with status code 200 if not error aoccured', () => {
    request('http://localhost:7865 /', function (error, response, body) {
      if (!error) {
        expect(response.statusCode).to.equal(200)
        expect(response.text).to.equal('Welcome to the payment system')
      }
    });
  });

});

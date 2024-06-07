const { expect } = require('chai');
const { should } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', function () {
  it('should return Promise if success equals true', function (done) {

    getPaymentTokenFromAPI(true)
    .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
    })
  });

  it('should return nothing if success equals false', function () {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});

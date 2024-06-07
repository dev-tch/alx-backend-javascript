const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let spyOb;

  beforeEach(function () {
    spyOb = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spyOb.restore();
  });
  it('should print the message<The total is: 120> in console log  ', function () {

    sendPaymentRequestToApi(100, 20);
    expect(spyOb.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('should print the message<The total is: 20> in console log ', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spyOb.calledOnceWithExactly('The total is: 20')).to.be.true;
});
});

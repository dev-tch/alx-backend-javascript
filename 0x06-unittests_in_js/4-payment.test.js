const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let stubObj;
  let spyOb;

  beforeEach(function () {
    stubObj = sinon.stub(Utils, 'calculateNumber').returns(10);
    spyOb = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stubObj.restore();
    spyOb.restore();
  });
  it('should use stub function and returns 10 ', function () {

    sendPaymentRequestToApi(100, 20);
    expect(stubObj.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
  it('should print the message<The total is: 10> in console log ', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spyOb.calledOnceWithExactly('The total is: 10')).to.be.true;
});
});

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(Utils, "calculateNumber");
  });

  afterEach(function () {
    sinon.restore();
  });
  it('should use Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber.returned(120)).to.be.true
  });
});

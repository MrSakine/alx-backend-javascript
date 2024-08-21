const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
    calculateNumberStub.returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
    calculateNumberStub.returns(20);
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});

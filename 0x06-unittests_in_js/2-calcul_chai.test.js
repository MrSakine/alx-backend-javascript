const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
    });

    it('should return 0 when a = -1.4 and b = 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.be.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
    });

    it('should return 0 when a = 1.4 and b = 1.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.be.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    });

    it('should return "Error" when a = 1.4 and b = 0.4', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.be.equal('Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error when an invalid type is provided', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});

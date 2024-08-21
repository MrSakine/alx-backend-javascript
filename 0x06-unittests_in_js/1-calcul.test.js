const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return 6 when a = 1.4 and b = 4.5", () => {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    });

    it("should return 0 when a = -1.4 and b = 1.4", () => {
      assert.strictEqual(calculateNumber("SUM", -1.4, 1.4), 0);
    });
  });

  describe("SUBTRACT", () => {
    it("should return -4 when a = 1.4 and b = 4.5", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });

    it("should return 0 when a = 1.4 and b = 1.4", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 1.4), 0);
    });
  });

  describe("DIVIDE", () => {
    it("should return 0.2 when a = 1.4 and b = 4.5", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });

    it('should return "Error" when a = 1.4 and b = 0.4', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
    });
  });

  describe("invalid Type", () => {
    it("should throw an error when an invalid type is provided", () => {
      assert.throws(() => calculateNumber("MULTIPLY", 1.4, 4.5), {
        name: "Error",
        message: "Invalid type",
      });
    });
  });
});

const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return 4 when a = 1.4 and b = 2.5", function () {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it("should return 4 when a = 1 and b = 3", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5 when a = 1.6 and b = 2.5", function () {
    assert.strictEqual(calculateNumber(1.6, 2.5), 5);
  });

  it("should return 0 when a = -0.4 and b = 0.4", function () {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it("should return -2 when a = -1.6 and b = -0.4", function () {
    assert.strictEqual(calculateNumber(-1.6, -0.4), -2);
  });

  it("should return 6 when a = 2.5 and b = 2.5", function () {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it("should return 0 when a = 0.1 and b = -0.1", function () {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });
});

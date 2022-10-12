const { checkStateCode } = require("./validation/checkStateCode");

test("Test of unique state code", () => {
  expect(checkStateCode()).toBe(true);
});

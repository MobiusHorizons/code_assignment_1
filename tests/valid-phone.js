let assert = require('assert')
let validPhone = require ('../src/phone-validation.js').default;

describe("Phone Validation", () => {
	it("should return false for 'null'", () => {
		assert.equal(validPhone(null), false);
	});

	it("should return false for a non-string number", () => {
		assert.equal(validPhone(1234567890), false);
	});
	it("return true for a 10 digit number", () => {
		assert.equal(validPhone('1234567890'), true);
	});

	it("return true for a 10 digit number with symbols", () => {
		assert.equal(validPhone('(123) 456-7890'), true);
	});

	it("return false for a 9 digit number with symbols", () => {
		assert.equal(validPhone('(123) 456-789'), false);
	});

	it("return false for a 9 digit number without symbols", () => {
		assert.equal(validPhone('123456789'), false);
	});
})

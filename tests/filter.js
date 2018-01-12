let assert     = require('assert')
let filter     = require ('../src/filter.js').default;
let validPhone = require ('../src/phone-validation.js').default;

const noop = () => {};

describe("User Filter", () => {
	it("should sort by age", () => {
		let start = [
			{ age: 2 , number: '555-555-5555' },
			{ age: 23, number: '555-555-5555' },
			{ age: 12, number: '555-555-5555' },
			{ age: 1 , number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
		];

		let want = [
			{ age: 1 , number: '555-555-5555' },
			{ age: 2 , number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 12, number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
			{ age: 23, number: '555-555-5555' },
		];

		assert.deepEqual(filter(start, 6), want);
	});

	it("should only return the requested number of items", () => {
		let start = [
			{ age: 2 , number: '555-555-5555' },
			{ age: 23, number: '555-555-5555' },
			{ age: 12, number: '555-555-5555' },
			{ age: 1 , number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
		];

		let want = [
			{ age: 1 , number: '555-555-5555' },
			{ age: 2 , number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 12, number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
		];

		assert.deepEqual(filter(start, 5), want);
	});

	it("should filter out invalid phone numbers", () => {
		let start = [
			{ age: 2 , number: '555-555-5555' },
			{ age: 23, number: '555-555-5555' },
			{ age: 12, number: '555-555-555' },
			{ age: 1 , number: '555-555-5555' },
			{ age: 40, number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
		];

		let want = [
			{ age: 1 , number: '555-555-5555' },
			{ age: 2 , number: '555-555-5555' },
			{ age: 4 , number: '555-555-5555' },
			{ age: 15, number: '555-555-5555' },
			{ age: 23, number: '555-555-5555' },
		];

		assert.deepEqual(filter(start, 5), want);
	});

	it("should sort by name", () => {
		let start = [
			{ age: 2 , name: 'a', number: '555-555-5555' },
			{ age: 23, name: 'b', number: '555-555-5555' },
			{ age: 12, name: 'c', number: '555-555-555' },
			{ age: 1 , name: 'd', number: '555-555-5555' },
			{ age: 40, name: 'e', number: '555-555-5555' },
			{ age: 4 , name: 'f', number: '555-555-5555' },
			{ age: 15, name: 'g', number: '555-555-5555' },
		];

		let want = [
			{ age: 2 , name: 'a', number: '555-555-5555' },
			{ age: 23, name: 'b', number: '555-555-5555' },
			{ age: 1 , name: 'd', number: '555-555-5555' },
			{ age: 4 , name: 'f', number: '555-555-5555' },
			{ age: 15, name: 'g', number: '555-555-5555' },
		];

		assert.deepEqual(filter(start, 5), want);
	});
})

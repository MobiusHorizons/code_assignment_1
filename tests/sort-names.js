let assert = require('assert')
let names  = require ('../src/sort-names.js').default;

describe('Sort Names', () => {
	it('Should sort names alphabetically', () => {
		const start = [
			{ name: 'foo' },
			{ name: 'bar' },
			{ name: 'baz' },
		];

		const want = [
			{ name: 'bar' },
			{ name: 'baz' },
			{ name: 'foo' },
		];

		let got = start.sort(names);
		assert.deepEqual(got, want);
	});

	it('Should sort missing names first', () => {
		const start = [
			{ name: 'foo' },
			{ age: 5      },
			{ name: 'bar' },
			{ name: 'baz' },
		];

		const want = [
			{ age: 5      },
			{ name: 'bar' },
			{ name: 'baz' },
			{ name: 'foo' },
		];

		let got = start.sort(names);
		assert.deepEqual(got, want);
	});
})



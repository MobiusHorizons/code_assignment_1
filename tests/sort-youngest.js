let assert   = require('assert')
let youngest = require ('../src/sort-youngest.js').default;

describe('Sort Youngest', () => {
	it('Should sort youngest first', () => {
		const start = [
			{ age : 10 },
			{ age : 4  },
			{ age : 25 },
			{ age : 10 },
		];

		const want = [
			{ age : 4  },
			{ age : 10 },
			{ age : 10 },
			{ age : 25 },
		];

		let got = start.sort(youngest);
		assert.deepEqual(got, want);
	});


	it('Should sort objects missing `age` last', () => {
		const start = [
			{ foo : 'bar' },
			{ age : 4  },
			{ age : 25 },
			{ age : 10 },
		];

		const want = [
			{ age : 4  },
			{ age : 10 },
			{ age : 25 },
			{ foo : 'bar' },
		];

		let got = start.sort(youngest);
		assert.deepEqual(got, want);
	});

	it('Should sort non-numecic values of `age` last', () => {
		const start = [
			{ age : 'not a number' },
			{ age : '8' },
			{ age : 4  },
			{ age : 25 },
			{ age : 10 },
		];

		const want = [
			{ age : 4  },
			{ age : 25 },
			{ age : 10 },
			{ age : '8' },
			{ age : 'not a number' },
		];

		let got = start.sort(youngest);
		assert.deepEqual(got.slice(3), want.slice(3));
	});
})

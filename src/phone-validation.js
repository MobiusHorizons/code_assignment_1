const decimals = '0123456789';

export default function validPhone(number) {
	if (typeof number != 'string') {
		return false;
	}

	let stripped = number.split('')
		.filter(c => decimals.indexOf(c) != -1)
		.join('');

	return stripped.length == 10;
}

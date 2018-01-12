export default function names(a, b) {
	if (!('name' in a && typeof a.name == 'string')) {
		return -1;
	}

	if (!('name' in b && typeof b.name == 'string')) {
		return 1;
	}

	return a.name.localeCompare(b.name);
}


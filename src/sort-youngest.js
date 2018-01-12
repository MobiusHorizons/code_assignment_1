export default function youngest(a, b) {
	if (!('age' in a && typeof a.age == 'number')) {
		return 1;
	}

	if (!('age' in b && typeof b.age == 'number')) {
		return -1;
	}

	return a.age - b.age;
}

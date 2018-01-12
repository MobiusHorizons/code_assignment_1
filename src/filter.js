import validPhone   from './phone-validation';
import sortYoungest from './sort-youngest';
import sortNames    from './sort-names';

export default function filterSort(users, length){
	let sorted = users
		.filter(({ number }) => validPhone(number))
		.sort(sortYoungest);

	return sorted.slice(0, length).sort(sortNames);
}

import domlette from 'domlette';

import './style.css';

import getUsers from './net';
import filter   from './filter';


function userDetail({name, number, age}, index) {
	return ['div', { 'class' : 'detail' }, [
		['div', { 'class' : 'index' }, (index + 1).toString() ],
		['div', { 'class' : 'row'}, [
			['label', {}, 'name: '],
			['span', {}, name],
		]],
		['div', { 'class' : 'row'}, [
			['label', {}, 'age: '], ['span', {}, age.toString()],
		]],
		['div', { 'class' : 'row'}, [
			['label', {}, 'phone: '], ['span', {}, number],
		]],
	]];
}

function init() {
	let container = null;
	let loader = null;

	domlette.mount(document.body, [
		['h1', {}, ['Code Assignment']],
		['p', {}, ['5 youngest users, with valid us telephone numbers sorted by name']],
		['div', { 'class' : 'container' }, [
			['div', { 'class' : 'loader' }, [], (ref) => loader = ref],
		], (ref) => container = ref],
	]);

	getUsers().then(users => filter(users, 5))
		.then(users => {
			// Display results;
			domlette.mount(container, users.map(userDetail));

			// Clear loader
			container.removeChild(loader);
		});
}

init();

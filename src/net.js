import fetch from 'unfetch';

const endpoint = 'https://appsheettest1.azurewebsites.net/sample';

function list(token) {
	let url = `${endpoint}/list`;

	if (token !== null) {
		url = `${url}?token=${token}`;
	}

	return fetch(url)
		.then(response => response.json());
}

function detail(id) {
	let url = `${endpoint}/detail/${id}`;
	return fetch(url)
		.then(response => response.json());
}

function getAllIds() {
	let ids = [];

	function handleData(data) {
		if (!('result' in data) || data.result.length == 0) {
			return ids;
		}

		ids = ids.concat(data.result);
		if (data.token) {
			return list(data.token).then(handleData);
		}
		return ids;
	}

	return list(null).then(handleData);
}

export default function users() {
	return getAllIds().then(ids => {
		let promises = ids.map(detail);
		return Promise.all(promises);
	});
}

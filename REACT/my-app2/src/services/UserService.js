export class UserService {


	_url = 'https://jsonplaceholder.typicode.com';

	async getAllUsers() {
		return await fetch(`${this._url}/users`).then(value => value.json());
	}

	getUserById(id) {
		return fetch(`${this._url}/users/${id}`).then(value => value.json());
	}


}
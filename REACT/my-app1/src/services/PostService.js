export class PostService {


	_url = 'https://jsonplaceholder.typicode.com';

	async getAllPosts() {
		return await fetch(`${this._url}/posts`).then(value => value.json());
	}

	async getPostByUser(id) {
		return await fetch(`${this._url}/posts?userId=${id}`).then(value => value.json());
	}


}


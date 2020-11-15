import './App.css';
import React, {Component} from 'react';
import Form from './Form';
import {UserService} from './services/UserService';
import {PostService} from './services/PostService';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';

export class App extends Component {

	_userService = new UserService();
    _postService = new PostService();

    state = {
		
		userItems: []
	
	};

	async componentDidMount() {
         let users = await this._userService.getAllUsers();
        //let users=[1,2,3,4]
		this.setState(() => {
			return {userItems: users};
		});
	console.log(users)		
	}
	
	
	render() {
		let {userItems} = this.state;
	
		console.log(userItems);
		
		return (
			<div>
				<Form
				users={userItems}
			/>


			</div>
		);
	}

}

export default App;
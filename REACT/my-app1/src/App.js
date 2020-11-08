import './App.css';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import React, {Component} from 'react';
import {UserService} from './services/UserService';
import {PostService} from './services/PostService';
import User from './components/User/User';
import Post from './components/Post/Post';

export class App extends Component {

	_userService = new UserService();
	_postService = new PostService();

	state = {
		postItems: [],
		userItems: [],

		item: []
	};

	async componentDidMount() {
		let users = await this._userService.getAllUsers();
		this.setState(() => {
			return {userItems: users};
		});
		let posts = await this._postService.getAllPosts();
		this.setState(() => {
			return {postItems: posts};
		});
		
	}
s

	     getOnePostById =(id)=> {
		 let post = this._postService.getPostByUser(id).then(result=>
			{	this.setState(() => {
				return {item: result} });
			})

	};

	render() {
		let {userItems} = this.state;
		let {postItems} = this.state;
		let {item} = this.state;

		console.log(userItems);
		console.log(postItems);
		console.log(item);
		
		return (
			<div>
				<Users
					items={userItems}
					getOnePostByIdUsers={this.getOnePostById}/>

				<hr/>
				{
					
					<Posts item={item}/>
									
				}


			</div>
		);
	}

}

export default App;
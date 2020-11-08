import React, {Component} from 'react';
import Post from '../Post/Post';

class Posts extends Component {


	constructor(props) {
		super(props);
	}

	render() {

		let posts = this.props.item;
		console.log(posts)
		
		return (
			<div>
				{
					posts.map(value => (
						<Post
							item={value}
							key={value.id}
							
						/>


					))

				}

			</div>
		);
	}
}

export default Posts;
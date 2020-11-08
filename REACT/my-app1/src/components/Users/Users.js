import React, {Component} from 'react';
import User from '../User/User';

class Users extends Component {


	constructor(props) {
		super(props);
	}

	render() {

	    let users = this.props.items;
		let onePostByIdUsers = this.props.getOnePostByIdUsers;
		return (
			<div>
				{
					users.map(value => (
						<User
							item={value}
							key={value.id}
							getOnePostByIdUser={onePostByIdUsers}
						/>


					))

				}

			</div>
		);
	}
}

export default Users;
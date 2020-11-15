import React, {Component} from 'react';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import {PostService} from './services/PostService';

class Form extends Component {
    _postService = new PostService();

    state = {
		item: []
	};

	constructor(props) {
		super(props);
	} 

    handleChange = (event) => {
        this.setState({ value: event.target.value });
      };

    getOnePostById =(id)=> {
        console.log(id)
        let post = this._postService.getPostByUser(id).then(result=>
           {	this.setState(() => {
               return {item: result} });
           })

   };
  
    render() {

		let users = this.props.users;
		console.log(users)
		let {item} = this.state;
        console.log(item);
		
		return (
			<div>
                 <select value={this.state.value} onChange={this.handleChange} >
               {
               users.map(result=>
                <option key={result.id} value={result.id} >
                    {result.id}-{result.name}
                </option>
                )} 
         </select>
                      
			<button onClick={() => this.getOnePostById(this.state.value)}>POST</button>
            {
					
					<Posts item={item}/>
									
				}
			</div>
            
		);
	}

}

export default Form;
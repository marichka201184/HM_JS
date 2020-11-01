import React, {Component} from 'react';
import {todolist} from '../../data/data';
import Todo from '../todo/todo';

class Todolist extends Component {

	render() {
		return (
			<div >
				{
					todolist.map((todo, index) => {
						return (<Todo todo={todo} key={index}/>);
					})
				}
			</div>
		);
	}


}

export default Todolist;
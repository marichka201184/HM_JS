import React, {Component} from 'react';


class Todo extends Component {


	constructor(props) {
		super(props);
		let {todo} = this.props;
		this.state = {todo};
	}

	changeStatus = () => {
		let {todo} = this.state;
		todo.complite = !todo.complite;
        this.setState({todo})
       
	};

	render() {
       
		return (
            <div >
				{this.state.todo.number} -
				{this.state.todo.task} -
                {this.state.todo.complite?'DONE':'NOT DONE'} 
               <button onClick={this.changeStatus}>COMPLITE</button>
			</div>
          
		);
	}
}

export default Todo;
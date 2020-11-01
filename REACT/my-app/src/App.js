import logo from './logo.svg';
import './App.css';
import {todolist} from './data/data';
import React from 'react';
import Todo from './components/todo/todo';
import Todolist from './components/todolist/todolist';

function App() {

	return (
		<div>
			<Todolist/>
		</div>);
}

export default App;
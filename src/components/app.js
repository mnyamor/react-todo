import React from 'react';
import TodosList from './todos-list';

import CreateTodo from './create-todo'

const todos = [
	{ 
		task: 'clean the house', 
		isCompleted: true 
	},
    { 
    	task: 'eat dinner', 
    	isCompleted: false 
    },

];


export default class App extends React.Component {
	//first thing our component will run
	constructor(props) {
		//connects it to the parent that its inheriting from
		super(props);
		//set up the state
		this.state = { //to update state and re-render your components
			todos // in es6 same as todos:todos 
		};
	}

	render() {

		return (
			<div>
				<h1>React Todo App</h1>
				<CreateTodo 
					todos={this.state.todos }
					createTask={this.createTask.bind(this)}/>
				<TodosList 
					todos={this.state.todos} 
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>	
			</div>
		);
	}

	toggleTask (task) {
		const foundTodo = _.find( this.state.todos, todo => todo.task === task );
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask );
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });

	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos });
	}
};


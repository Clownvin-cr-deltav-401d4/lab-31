import React from 'react';

import Header from './components/header';
import Form from './components/form';
import TodoList from './components/todo-list';
import Details from './components/details';

import './styles/app.scss';

let id = 0;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  }

  createTodo = (text, assignedTo, difficulty, date) => {
    this.setState(state => state.todo.push({id: id++, text, assignedTo, difficulty, date, complete: false}));
  }

  deleteTodo = todoItem => {
    this.setState(state => state.todo = state.todo.filter(item => item.id !== todoItem.id));
  }

  toggleComplete = todoItem => {
    this.setState(state => {
      //const item = state.todo.find(item => item.id === todoItem.id);
      todoItem.complete = !todoItem.complete;
      return state;
    });
  }

  showDetails = todoItem => {
    this.setState(state => state.itemToDetail = todoItem);
  }

  closeDetails = () => {
    this.setState(state => delete state.itemToDetail);
  }

  render() {
    
    return (
      <>
        <Details item={this.state.itemToDetail} closeDetails={this.closeDetails}/>
        <Header count={this.state.todo.length} />
        <Form createTodo={this.createTodo}/>
        <TodoList
          todos={this.state.todo}
          deleteTodo={this.deleteTodo}
          toggleComplete={this.toggleComplete}
          showDetails={this.showDetails} />
      </>
    );
  }
}

export default App;

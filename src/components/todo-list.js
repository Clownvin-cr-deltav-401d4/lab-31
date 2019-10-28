import React from 'react';

import TodoItem from './todo-item';

class TodoList extends React.Component {
  render() {
    return (
      <>
        <ul id="items">
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id}
            item={todo}
            delete={this.props.deleteTodo}
            toggleComplete={this.props.toggleComplete}
            showDetails={this.props.showDetails} />
        ))}
        </ul>
      </>
    )
  }
}

export default TodoList;

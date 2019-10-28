import React from 'react';

import TodoItem from './todo-item';

function TodoList(props) {
  return (
    <>
      <ul id="items">
      {props.todos.map(todo => (
        <TodoItem key={todo.id}
          item={todo}
          delete={props.deleteTodo}
          toggleComplete={props.toggleComplete}
          showDetails={props.showDetails} />
      ))}
      </ul>
    </>
  )
}

export default TodoList;

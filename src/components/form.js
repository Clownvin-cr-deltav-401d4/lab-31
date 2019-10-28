import React from 'react';

class Form extends React.Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.refs.task.value, this.refs.assignedTo.value, this.refs.difficulty.value, this.refs.date.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} id="todoForm">
        <input id="item" placeholder="Add To Do List Item" ref="task" required />
        <input id="assigned-to" placeholder="Assigned To" ref="assignedTo" required />
        <input id="difficulty" placeholder="3" type="number" min={1} max={5} ref="difficulty" required />
        <input id="date" type="date" ref="date" required />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;

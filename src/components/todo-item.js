import React from 'react';

function TodoItem(props) {
  const deleteItem = e => {
    e.preventDefault();
    props.delete(props.item);
  }

  const toggleComplete = e => {
    e.preventDefault();
    props.toggleComplete(props.item);
  }

  const showDetails = e => {
    e.preventDefault();
    props.showDetails(props.item);
  }

  return (
    <li className={`complete-${props.item.complete}`}>
      <span id={props.item.id} onClick={toggleComplete}>
        {props.item.text}
      </span>
      <button className="details" onClick={showDetails}>Details</button>
      <button className="delete" onClick={deleteItem}>Delete</button>
    </li>
  )
}

export default TodoItem;

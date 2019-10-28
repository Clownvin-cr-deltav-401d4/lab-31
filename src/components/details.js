import React from 'react';

function Details(props) {
  if (!props.item) {
    return null;
  }
  return (
    <section id="details">
      <div>
        <header>
          <button onClick={props.closeDetails}>x</button>
        </header>
        <p className="text">{props.item.text}</p>
        <p className={`difficulty d${props.item.difficulty}`}>Difficulty: <span>{props.item.difficulty}</span></p>
        <p className="assigned-to">Assigned To: <span>{props.item.assignedTo}</span></p>
        <p className="date">Date: <span>{props.item.date}</span></p>
      </div>
    </section>
  );
}

export default Details;

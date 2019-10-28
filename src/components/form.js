import React, {useState} from 'react';

function Form(props) {

  const [text, setText] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [date, setDate] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.createTodo(text, assignedTo, difficulty, date);
  }

  const onTextChange = e => {
    e.preventDefault();
    setText(e.target.value);
  }

  const onAssignedToChange = e => {
    e.preventDefault();
    setAssignedTo(e.target.value);
  }

  const onDifficultyChange = e => {
    e.preventDefault();
    setDifficulty(e.target.value);
  }

  const onDateChange = e => {
    e.preventDefault();
    setDate(e.target.value);
  }

  return (
    <form onSubmit={onSubmit} id="todoForm">
      <input id="item" placeholder="Add To Do List Item" onChange={onTextChange} required />
      <input id="assigned-to" placeholder="Assigned To" onChange={onAssignedToChange} required />
      <input id="difficulty" placeholder="3" type="number" min={1} max={5} onChange={onDifficultyChange} required />
      <input id="date" type="date" onChange={onDateChange} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

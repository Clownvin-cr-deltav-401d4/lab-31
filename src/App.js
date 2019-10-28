import React, {useReducer} from 'react';

import Header from './components/header';
import Form from './components/form';
import TodoList from './components/todo-list';
import Details from './components/details';

import './styles/app.scss';

let id = 0;

const initialState = {todo: [], itemToDetail: null};

function toggleComplete(item) {
  item.complete = !item.complete;
  return item;
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      state.todo.push(action.item);
      break;
    case 'delete':
      state.todo = state.todo.filter(item => item.id !== action.item.id);
      break;
    case 'toggleComplete':
      state.todo = state.todo.map(item => item.id === action.item.id ? toggleComplete(item) : item);
      break;
    case 'showDetails':
      state.itemToDetail = action.item;
      break;
    case 'closeDetails':
      state.itemToDetail = null;
      break;
    default:
      console.error('Unexpected action:', action.type);
  }
  return {...state};
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const createTodo = (text, assignedTo, difficulty, date) => {
    dispatch({type: 'add', item: {id: id++, text, assignedTo, difficulty, date, complete: false}});
  }

  const deleteTodo = item => {
    dispatch({type: 'delete', item});
  }

  const toggleComplete = item => {
    dispatch({type: 'toggleComplete', item});
  }

  const showDetails = item => {
    dispatch({type: 'showDetails', item})
  }

  const closeDetails = () => {
    dispatch({type: 'closeDetails'});
  }
  console.log('Re-rendering');
  return (
    <>
      <Details item={state.itemToDetail} closeDetails={closeDetails}/>
      <Header count={state.todo.reduce((count, item) => !item.complete ? count + 1 : count, 0)} />
      <Form createTodo={createTodo}/>
      <TodoList
        todos={state.todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        showDetails={showDetails} />
    </>
  );
}

export default App;

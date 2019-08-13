import React, { useState, useReducer } from 'react';

import { initialsState, todoReducer } from '../reducers/reducer';


const Todo = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialsState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <li>{state.item}{' '}</li>
      </ul>
      <input
        className="todo-input"
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <button
        onClick={() =>
          dispatch({ type: 'ADD_TODO', payload: newTodo })
        }
      >
        Add Todo
</button>
    </div>
  );

};

export default Todo;

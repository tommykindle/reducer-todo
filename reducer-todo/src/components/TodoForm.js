import React, { useState, useReducer } from 'react';

import { initialsState, todoReducer } from '../reducers/reducer';


const Todo = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialsState);
}

return (
  <div>
    <h1>Todo List</h1>
    <input
      className="todo-input"
      type="text"
      name="newTodo"
      value={newTodo}
      onChange={handleChanges}
    />

  </div>
)
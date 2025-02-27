import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/reducer';


const Todo = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {state.todos.map(todo => <li onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })} className={todo.completed ? 'completed' : ''}>{todo.item}{' '}</li>)}
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
      <button
        onClick={() =>
          dispatch({ type: 'CLEAR_TODOS' })
        }
      >
        Clear Todo's
 </button>
    </div>
  );

};

export default Todo;

export const initialState = {
  todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}


export const todoReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,

        todos: [...state.todos, { item: action.payload, completed: false, id: Date.now() }]
      }
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        })
      }
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return !todo.completed
        })
      }
    default:
      return state;
  }



  return state;
}

export default initialState;
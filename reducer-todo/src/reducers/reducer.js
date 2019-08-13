export const initialState = {
  todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}


export const todoReducer = (state, action) => {

  console.log(action);



  return state;
}

export default initialState;
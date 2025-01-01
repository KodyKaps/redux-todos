//actions describe what state mgmt you can do
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

//Action creators - functions that create actions and pass data to reducer
export function addTodo(text) {
  //creates an add todo action and the data is the text of the toodo
  return {
    type: ADD_TODO,
    text,
  };
}

export function deleteTodo(index) {
  //creates a delete todo action with the appropirate index to delete
  return {
    type: DELETE_TODO,
    index,
  };
}

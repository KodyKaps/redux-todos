import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions";

//reducer to handle state mgmt
//state is your list of todos, defined as [] by defauly, action what thing you doing
const todos = (state = [], action) => {
  //based on action type handle state updates
  switch (action.type) {
    case ADD_TODO:
      //return the existing todos and add a new object from the action data they sernt in action creator
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      //turn toodo to completed when that index is checked -> is completed
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      //exclude the index from the action
      return state.filter((t, i) => i !== action.index);
    default:
      //no action or not handled no state changes
      return state;
  }
};

export default todos;

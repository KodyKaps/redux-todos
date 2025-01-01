import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
import "./index.scss";

import { createStore } from "redux";
import todos from "./reducers";

const store = createStore(todos);

console.log("Initial State", store.getState()); //should be []
//debugger;
//state operations to show state changes because of some interaction
store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());
store.dispatch(addTodo("Dispatch my second action"));
console.log("State after adding second todo", store.getState());
store.dispatch(addTodo("Dispatch my third action"));
console.log("State after adding third todo", store.getState());

//now delete the first todo
store.dispatch(deleteTodo(0));
console.log("State after delete first todo", store.getState());
function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

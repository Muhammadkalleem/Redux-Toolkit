import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Use curly braces
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todo";

function App() {
  return (
    <Provider store={store}>
      <h1> Learn ReduxToolkit from React </h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;

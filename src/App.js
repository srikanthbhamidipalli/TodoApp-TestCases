import React from "react";
import TodoStore from "./Stores/TodoStore";
import TodoApp from "./components/TodoApp";

function App() {
  const todoStore = new TodoStore();
  return (
    <div className="App">
      <TodoApp todoStore={todoStore} />
    </div>
  );
}

export default App;

import React from "react";
import TodoStore from "./Stores/TodoStore";
import EnterTodo from "./components/EnterTodo";
import DisplayTodos from "./components/DisplayTodos";
import FilterBar from "./components/FilterBar";
function App() {
  const todoStore = new TodoStore();
  return (
    <div className="App">
      <EnterTodo
        todoStore={todoStore}
        inputText={""}
        onPressEnterKey={todoStore.addTodo}
      />
      <DisplayTodos todoStore={todoStore} />
      <FilterBar todoStore={todoStore} />
    </div>
  );
}

export default App;

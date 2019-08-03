import React, { Component } from "react";
import EnterTodo from "./EnterTodo";
import DisplayTodos from "./DisplayTodos";
import FilterBar from "./FilterBar";
class TodoApp extends Component {
  render() {
    return (
      <div>
        <EnterTodo
          todoStore={this.props.todoStore}
          inputText={""}
          onPressEnterKey={this.props.todoStore.addTodo}
        />
        <DisplayTodos todoStore={this.props.todoStore} />
        <FilterBar todoStore={this.props.todoStore} />
      </div>
    );
  }
}
export default TodoApp;

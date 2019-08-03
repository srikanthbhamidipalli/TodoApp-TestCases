import React, { Component } from "react";
import EachTodo from "./EachTodo";
import { observer } from "mobx-react";

@observer
class DisplayTodos extends Component {
  render() {
    const todoList = this.props.todoStore.todoList.map(todoItem => (
      <div>
        <EachTodo
          key={todoItem.id}
          todoItem={todoItem}
          todoStore={this.props.todoStore}
        />
      </div>
    ));
    return <div data-testid="eachTodo">{todoList}</div>;
  }
}
export default DisplayTodos;

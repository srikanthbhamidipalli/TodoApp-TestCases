import React, { Component } from "react";
import { observer } from "mobx-react";
import { TodoDescription } from "./styledComponents";
import { observable } from "mobx";
import EnterTodo from "../../EnterTodo";
import TodoStore from "../../../Stores/TodoStore";

@observer
class EachTodo extends Component {
  handleCheckBoxChange = () => {
    this.props.todoItem.toggleCompletedStatus();
  };
  handleDeleteIconClick = () => {
    this.props.todoStore.removeTodo(this.props.todoItem.id);
  };
  handleDoubleClickEvent = () => {
    this.props.todoStore.isTodoDoubleClicked = true;
  };
  render() {
    return (
      <div>
        {this.props.todoStore.isTodoDoubleClicked ? (
          <EnterTodo
            todoStore={this.props.todoStore}
            inputText={this.props.todoItem.description}
            onPressEnterKey={this.props.todoItem.updateTodo}
          />
        ) : (
          <div>
            <input
              type="checkbox"
              checked={this.props.todoItem.isCompleted}
              onChange={this.handleCheckBoxChange}
              data-testid="inputBox"
            />
            <TodoDescription
              isCompleted={this.props.todoItem.isCompleted}
              onDoubleClick={this.handleDoubleClickEvent}
              data-testid="todo-desc"
            >
              {this.props.todoItem.description}
            </TodoDescription>
            <span onClick={this.handleDeleteIconClick} data-testid="crossmark">
              X
            </span>
          </div>
        )}
      </div>
    );
  }
}
export default EachTodo;

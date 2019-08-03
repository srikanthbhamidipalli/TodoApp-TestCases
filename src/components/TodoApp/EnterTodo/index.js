import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class EnterTodo extends Component {
  @observable inputText = this.props.inputText;

  handleChangeEvent = e => {
    this.inputText = e.target.value;
  };
  handleKeyDownEvent = e => {
    if (e.keyCode === 13) {
      this.props.onPressEnterKey(this.inputText);
      this.inputText = "";
      this.props.todoStore.isTodoDoubleClicked = false;
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What needs to be done"
          onChange={this.handleChangeEvent}
          onKeyDown={this.handleKeyDownEvent}
          value={this.inputText}
        />
      </div>
    );
  }
}
export default EnterTodo;

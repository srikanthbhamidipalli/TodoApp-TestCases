import React, { Component } from "react";

class FilterBar extends Component {
  handleClearCompletedClick = () => {
    this.props.todoStore.clearCompletedTodos();
  };
  render() {
    return (
      <div>
        <span data-testid="items-left">
          {this.props.todoStore.activeTodosCount} items left
        </span>

        <span
          onClick={this.handleClearCompletedClick}
          data-testid="clear-completed"
        >
          clear completed
        </span>
      </div>
    );
  }
}
export default FilterBar;

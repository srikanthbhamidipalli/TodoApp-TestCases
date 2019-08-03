import React, { Component } from "react";

class FilterBar extends Component {
  handleClearCompletedClick = () => {
    this.props.todoStore.clearCompletedTodos();
  };
  handleFilterButtonClick = e => {
    this.props.todoStore.setFilterText(e.target.value);
  };
  render() {
    return (
      <div>
        <span data-testid="items-left">
          {this.props.todoStore.activeTodosCount} items left
        </span>
        <span>
          <button
            data-testid="all-button"
            onClick={this.handleFilterButtonClick}
            value="all"
          >
            all
          </button>
        </span>
        <span>
          <button
            data-testid="active-button"
            onClick={this.handleFilterButtonClick}
            value="active"
          >
            active
          </button>
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

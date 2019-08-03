import React, { Component } from "react";
import { filterNames } from "../../constants";

class FilterBar extends Component {
  handleClearCompletedClick = () => {
    this.props.todoStore.clearCompletedTodos();
  };
  handleFilterButtonClick = e => {
    this.props.todoStore.setFilterText(e.target.value);
  };
  render() {
    const buttons = [];
    Object.values(filterNames).forEach(filterName => {
      const eachButton = (
        <span key={filterName}>
          <button
            data-testid={filterName + "-button"}
            onClick={this.handleFilterButtonClick}
            value={filterName}
          >
            {filterName}
          </button>
        </span>
      );
      buttons.push(eachButton);
    });
    return (
      <div>
        <span data-testid="items-left">
          {this.props.todoStore.activeTodosCount} items left
        </span>
        {buttons}
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

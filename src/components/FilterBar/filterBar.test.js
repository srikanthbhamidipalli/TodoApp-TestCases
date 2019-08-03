import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterBar from ".";
import TodoStore from "../../Stores/TodoStore";

describe("Filter Bar test cases", () => {
  it("should check for the functionality of clear completed", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "clearCompletedTodos");
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const clearCompleted = getByTestId("clear-completed");
    expect(clearCompleted).toBeDefined();
    fireEvent.click(clearCompleted);
    expect(todoStore.clearCompletedTodos).toBeCalled();
  });
});

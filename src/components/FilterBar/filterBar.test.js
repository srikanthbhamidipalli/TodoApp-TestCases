import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FilterBar from ".";
import TodoStore from "../../Stores/TodoStore";

describe("Filter Bar test cases", () => {
  afterEach(cleanup);
  it("should check for the functionality of clear completed", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "clearCompletedTodos");
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const clearCompleted = getByTestId("clear-completed");
    expect(clearCompleted).toBeDefined();
    fireEvent.click(clearCompleted);
    expect(todoStore.clearCompletedTodos).toBeCalled();
  });

  it("should check for the items left text containing element is rendered or not", () => {
    const todoStore = new TodoStore();
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const itemsLeft = getByTestId("items-left");
    expect(itemsLeft).toBeDefined();
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FilterBar from ".";
import TodoStore from "../../Stores/TodoStore";

describe("Filter Bar test cases", () => {
  let todoStore;
  afterEach(cleanup);
  beforeEach(() => {
    todoStore = new TodoStore();
  });
  it("should check for the functionality of clear completed", () => {
    jest.spyOn(todoStore, "clearCompletedTodos");
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const clearCompleted = getByTestId("clear-completed");
    expect(clearCompleted).toBeDefined();
    fireEvent.click(clearCompleted);
    expect(todoStore.clearCompletedTodos).toBeCalled();
  });

  it("should check for the items left text containing element is rendered or not", () => {
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const itemsLeft = getByTestId("items-left");
    expect(itemsLeft).toBeDefined();
  });
  it("should check for the all button on click event", () => {
    const { getByTestId } = render(<FilterBar todoStore={todoStore} />);
    const activeButton = getByTestId("all-button");
    jest.spyOn(todoStore, "setFilterText");
    fireEvent.click(activeButton, { target: { value: "all" } });
    expect(todoStore.setFilterText).toBeCalledWith("all");
  });
});

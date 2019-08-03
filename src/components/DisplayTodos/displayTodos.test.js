import React from "react";
import { render } from "@testing-library/react";
import DisplayTodos from ".";
import TodoStore from "../../Stores/TodoStore";

describe("Display todos Component test cases", () => {
  const todoStore = new TodoStore();
  it("should test for finding eachTodo component", () => {
    const { getByTestId } = render(<DisplayTodos todoStore={todoStore} />);
    const eachTodo = getByTestId("eachTodo");
    expect(eachTodo).toBeDefined();
  });
});

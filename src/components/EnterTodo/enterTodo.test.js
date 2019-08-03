import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EnterTodo from "./index";
import TodoStore from "../../Stores/TodoStore";
import TodoModel from "../../Models/TodoModel";

describe("EnterTodo component testcases", () => {
  const todoStore = new TodoStore();
  it("should Take a todo description from InputTextBox", () => {
    // todoStore.addTodo = jest.fn();
    jest.spyOn(todoStore, "addTodo");
    const { getByPlaceholderText } = render(
      <EnterTodo
        todoStore={todoStore}
        inputText={""}
        onPressEnterKey={todoStore.addTodo}
      />
    );
    const inputTextBox = getByPlaceholderText("What needs to be done");
    expect(inputTextBox).toBeDefined();
    const todoDesc = "Learn Todos App";
    const changeEvent = { target: { value: todoDesc } };
    fireEvent.change(inputTextBox, changeEvent);
    const keyDownEvent = {
      key: "Enter",
      keyCode: 13,
      code: 13
    };
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect(todoStore.addTodo).toBeCalledWith(todoDesc);
  });
});

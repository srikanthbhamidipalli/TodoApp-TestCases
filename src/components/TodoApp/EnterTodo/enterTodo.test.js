import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import EnterTodo from "./index";
import TodoStore from "../../../Stores/TodoStore";

describe("EnterTodo component testcases", () => {
  const todoStore = new TodoStore();
  let keyDownEvent;
  afterEach(cleanup);
  beforeEach(() => {
    keyDownEvent = {
      key: "Enter",
      keyCode: 13,
      code: 13
    };
    jest.spyOn(todoStore, "addTodo");
  });
  it("should Take a todo description from InputTextBox", () => {
    // todoStore.addTodo = jest.fn();

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
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect(todoStore.addTodo).toBeCalledWith(todoDesc);
  });
  it("should check for not to submit the todo when input text is empty", () => {
    const { getByPlaceholderText } = render(
      <EnterTodo
        todoStore={todoStore}
        inputText={""}
        onPressEnterKey={todoStore.addTodo}
      />
    );
    const inputTextBox = getByPlaceholderText("What needs to be done");
    const todoDesc = "";
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect(todoStore.addTodo).not.toBeCalledWith(todoDesc);
  });
  it("should check for not to submit the todo when input text is filled with only spaces", () => {
    const { getByPlaceholderText } = render(
      <EnterTodo
        todoStore={todoStore}
        inputText={""}
        onPressEnterKey={todoStore.addTodo}
      />
    );
    const inputTextBox = getByPlaceholderText("What needs to be done");
    const todoDesc = "                                       ";
    const changeEvent = { target: { value: todoDesc } };
    fireEvent.change(inputTextBox, changeEvent);
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect(todoStore.addTodo).not.toBeCalledWith(todoDesc);
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import EnterTodo from "./index";
import TodoStore from "../../../Stores/TodoStore";

describe("EnterTodo component testcases", () => {
  let keyDownEvent;
  afterEach(cleanup);
  beforeEach(() => {
    keyDownEvent = {
      key: "Enter",
      keyCode: 13,
      code: 13
    };
  });
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
    fireEvent.keyDown(inputTextBox, keyDownEvent);
    expect(todoStore.addTodo).toBeCalledWith(todoDesc);
  });
  it("should check for not to submit the todo when input text is empty", () => {
    jest.spyOn(todoStore, "addTodo");
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
    jest.spyOn(todoStore, "addTodo");
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

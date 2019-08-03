import EachTodo from ".";
import React from "react";
import { render, fireEvent, cleanup, getByText } from "@testing-library/react";
import TodoModel from "../../../Models/TodoModel";
import TodoStore from "../../../Stores/TodoStore";
describe("EachTodo component test cases", () => {
  let todoItem;
  afterEach(cleanup);
  beforeEach(() => {
    todoItem = new TodoModel("hello");
  });
  it("should update the todo isCompleted status", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoItem, "toggleCompletedStatus");
    const { getByTestId } = render(
      <EachTodo todoItem={todoItem} todoStore={todoStore} />
    );
    const inputBox = getByTestId("inputBox");
    fireEvent.click(inputBox);
    expect(todoItem.toggleCompletedStatus).toBeCalled();
  });
  it("should check if the todo is removing from todolist when click on cross mark", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "removeTodo");
    const { getByTestId } = render(
      <EachTodo todoItem={todoItem} todoStore={todoStore} />
    );
    const crossmark = getByTestId("crossmark");
    fireEvent.click(crossmark);
    expect(todoStore.removeTodo).toBeCalledWith(todoItem.id);
  });
  it("should check if the todo description is updating or not", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("hello world");
    jest.spyOn(todoStore.todoList[0], "updateTodo");
    const { getByTestId, getByPlaceholderText } = render(
      <EachTodo todoItem={todoStore.todoList[0]} todoStore={todoStore} />
    );
    const todoDescription = getByTestId("todo-desc");
    fireEvent.doubleClick(todoDescription);
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
    expect(todoStore.todoList[0].updateTodo).toBeCalled();
  });
});

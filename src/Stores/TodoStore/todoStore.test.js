import TodoStore from "./index";

describe("TodoStore test cases", () => {
  let todoStore;
  beforeEach(() => {
    todoStore = new TodoStore();
  });
  it("should test for todoslist length for zero", () => {
    expect(todoStore.todoList.length).toEqual(0);
  });
  it("should test for addTodo functionality", () => {
    const description = "Hello world";

    todoStore.addTodo(description);
    expect(todoStore.todoList.length).toBe(1);
    expect(todoStore.todoList[0].description).toBe(description);
  });
  it("should test for remove todo from todolist", () => {
    const description = "Hello world";
    const todoId = todoStore.addTodo(description);
    jest.spyOn(todoStore, "removeTodo");
    todoStore.removeTodo(todoId);
    expect(todoStore.removeTodo).toBeCalledWith(todoId);
  });
  it("should check for the active todos count", () => {
    expect(todoStore.activeTodosCount).toBeDefined();
  });
});

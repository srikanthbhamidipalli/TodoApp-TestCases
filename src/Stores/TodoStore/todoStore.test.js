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
  it("should check for the todos left count", () => {
    const description = "hello";
    todoStore.addTodo(description);
    expect(todoStore.activeTodosCount).toBe(1);
    todoStore.todoList[0].toggleCompletedStatus();
    expect(todoStore.activeTodosCount).toBe(0);
  });
  it("should check for the filter text is setting upto the state variable or not", () => {
    const filterName = "all";
    todoStore.setFilterText(filterName);
    expect(todoStore.filterText).toBe(filterName);
  });
  it("should check for the filter Todos computed value functionality", () => {
    todoStore.addTodo("hello");
    todoStore.addTodo("hello world");
    const filterName = "all";
    todoStore.setFilterText(filterName);
    expect(todoStore.filterTodos).toBe(todoStore.todoList);
    todoStore.todoList[0].toggleCompletedStatus();
    expect(todoStore.filterTodos).toBe(todoStore.todoList);
  });
  it("should check for the filter Todos computed value functionality for Active Button", () => {
    todoStore.addTodo("hello");
    todoStore.addTodo("hello world");
    const filterName = "active";
    todoStore.setFilterText(filterName);
    todoStore.todoList[0].toggleCompletedStatus();
    expect(todoStore.filterTodos).toHaveLength(1);
  });
});

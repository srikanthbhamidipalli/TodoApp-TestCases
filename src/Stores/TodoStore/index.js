import { observable, action, computed, get } from "mobx";
import TodoModel from "../../Models/TodoModel";
import { filterNames } from "../../constants";
class TodoStore {
  @observable todoList = [];
  @observable isTodoDoubleClicked = false;
  @observable filterText = filterNames.All;

  @action.bound addTodo(todoItemDescription) {
    const todoInstance = new TodoModel(todoItemDescription);
    this.todoList.push(todoInstance);
    return todoInstance.id;
  }

  @action.bound removeTodo(id) {
    this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
  }

  @action.bound clearCompletedTodos() {
    this.todoList = this.todoList.filter(
      todoItem => todoItem.isCompleted !== true
    );
  }

  @action.bound setFilterText(filterName) {
    this.filterText = filterName;
  }

  @computed get activeTodosCount() {
    return this.todoList.filter(todoItem => todoItem.isCompleted !== true)
      .length;
  }

  @computed get filterTodos() {
    if (this.filterText === filterNames.All) {
      return this.todoList;
    }
    if (this.filterText === filterNames.Active) {
      return this.todoList.filter(todoItem => todoItem.isCompleted !== true);
    }
    if (this.filterText === filterNames.Completed) {
      return this.todoList.filter(todoItem => todoItem.isCompleted === true);
    }
  }
}
export default TodoStore;

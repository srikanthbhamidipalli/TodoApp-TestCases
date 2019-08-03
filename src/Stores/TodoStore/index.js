import { observable, action, computed, get } from "mobx";
import TodoModel from "../../Models/TodoModel";
class TodoStore {
  @observable todoList = [];
  @observable isTodoDoubleClicked = false;
  @observable filterText = "active";

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

  @action.bound setFilterText(filtername) {
    this.filterText = filtername;
  }

  @computed get activeTodosCount() {
    return this.todoList.filter(todoItem => todoItem.isCompleted !== true)
      .length;
  }
}
export default TodoStore;

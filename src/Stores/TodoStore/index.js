import { observable, action } from "mobx";
import TodoModel from "../../Models/TodoModel";
class TodoStore {
  @observable todoList = [];
  @observable isTodoDoubleClicked = false;

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
}
export default TodoStore;

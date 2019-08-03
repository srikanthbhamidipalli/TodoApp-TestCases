import { observable } from "mobx";

class TodoModel {
  @observable isCompleted;
  constructor(desc) {
    this.description = desc;
    this.id = Date.now();
    this.isCompleted = false;
  }
  updateTodo = newDescription => {
    this.description = newDescription;
  };
  toggleCompletedStatus = () => {
    this.isCompleted = !this.isCompleted;
  };
}

export default TodoModel;

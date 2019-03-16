import React, { Component } from "react";
import Task from "./Task";
import "./style.css";
import InputForm from "./InputForm";

class TodoList extends Component {
  state = { todo: [] };

  inputStateHandler = event => {
    event.preventDefault();
    let task = {
      task: event.target.task.value,
      id: this.state.todo.length + 1
    };
    const modified = [...this.state.todo];
    modified.push(task);
    event.target.task.value = "";
    this.setState({ todo: modified });
  };

  removeHandler = (id, e) => {
    const todos = this.state.todo.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todo: todos });
  };

  render() {
    return (
      <div>
        <Task todo={this.state.todo} remove={this.removeHandler} />
        <InputForm click={this.inputStateHandler} />
      </div>
    );
  }
}

export default TodoList;

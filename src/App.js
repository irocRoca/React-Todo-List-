import React, { Component } from "react";
import TodoList from "./component/TodoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Task</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;

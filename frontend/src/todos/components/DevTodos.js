import React from "react";
import TodoClient from "../../common/clients/TodoClient";
import Todo from "./Todo";

class DevTodos extends React.Component {
  state = {
    todos: {}
  };

  updateDevTodos = () =>
    TodoClient.getDevTodos().then(res =>
      this.setState({
        todos: res.data && res.data[0] && res.data[0].todos
      })
    );

  componentDidMount() {
    this.updateDevTodos();
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>DEv Todos</h2>
        <h5>Done</h5>
        <ul>
          {todos && todos.done &&
            todos.done.map(todo => (
              <li key={todo.id}>
                <Todo
                  todo={todo}
                  onRemove={this.updateDevTodos}
                  onStatusChange={this.updateDevTodos}
                />
              </li>
            ))}
        </ul>
        <h5>in progress</h5>
        <ul>
        {todos && todos.in_progress &&
            todos.in_progress.map(todo => (
              <li key={todo.id}>
                <Todo
                  todo={todo}
                  onRemove={this.updateDevTodos}
                  onStatusChange={this.updateDevTodos}
                />
              </li>
            ))}
        </ul>
        <h5>Open</h5>
        <ul>
        {todos && todos.open &&
            todos.open.map(todo => (
              <li key={todo.id}>
                <Todo
                  todo={todo}
                  onRemove={this.updateDevTodos}
                  onStatusChange={this.updateDevTodos}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default DevTodos;

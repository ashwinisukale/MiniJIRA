import React from "react";
import TodoClient from "../../common/clients/TodoClient";

class AdminTodos extends React.Component {
  state = {
    response: [],
    by: "by_project"
  };

  updateAdminTodos = (by = "by_project") =>
    TodoClient.getAdminTodos(by).then(res =>
      this.setState({
        response: res.data,
        by
      })
    );

  componentDidMount() {
    this.updateAdminTodos();
  }

  render() {
    const { response, by } = this.state;
    return (
      <div>
        <h5>Admin todos</h5>
        <button
          onClick={() => this.updateAdminTodos("by_user")}
          disabled={by === "by_user"}
        >
          By user
        </button>
        <button
          onClick={() => this.updateAdminTodos("by_project")}
          disabled={by === "by_project"}
        >
          By project
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Open</th>
              <th>In progress</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {response.map(row => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>
                  [
                  {row.todos.open &&
                    row.todos.open.map(todo => " " + todo.name).toString()}
                  ]
                </td>
                <td>
                  [
                  {row.todos.in_progress &&
                    row.todos.in_progress.map(todo => " " + todo.name).toString()}
                  ]
                </td>
                <td>
                  [
                  {row.todos.done &&
                    row.todos.done.map(todo => " " + todo.name).toString()}
                  ]
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminTodos;

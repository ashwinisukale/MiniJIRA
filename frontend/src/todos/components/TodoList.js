import React from 'react';
import TodoClient from '../../common/clients/TodoClient';
import AddTodo from './AddTodo';
import Todo from './Todo';

class TodoList extends React.Component {
  state= {
    todos: []
  }

  updateTodoList = () => TodoClient.getTodos(this.props.project_id).then(res => this.setState({
    todos: res.data
  }));

  componentDidMount() {
    this.updateTodoList();
  }

  render() {
    const { todos } = this.state;
    const {project_id} = this.props;
    return (
      <div>
        <h2>Todos</h2>
        <AddTodo onAdd={this.updateTodoList} project_id={project_id}/>
        <ul>
        {
          todos.map(todo => <li key={todo.id}>
          <Todo todo={todo} onRemove={this.updateTodoList} onStatusChange={this.updateTodoList} />
            </li>)
        }
        </ul>
      </div>
    )
  }
}

export default TodoList;
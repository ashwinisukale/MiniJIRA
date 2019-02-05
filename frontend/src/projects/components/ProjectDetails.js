import React from 'react';
import ProjectClient from '../../common/clients/ProjectClient';
import TodoList from '../../todos/components/TodoList';
import UserList from '../../users/components/UserList';

class ProjectDetails extends React.Component {
  state= {
    name: '',
    description: '',
    users: [],
    todos: [],
    tabName: 'users'
  }

  onChange = (value, type) => {
    this.setState({
      [type]: value
    });
  }

  fetchProjectDetails = (id) => ProjectClient.getProjectDetails(id).then(res => this.setState({
    ...res.data
  }));

  componentDidMount() {
    console.log(this.props);
    this.fetchProjectDetails(this.props.match.params.id);
  }

  render() {
    const { name, description, tabName } = this.state;
    return (
      <div>
        <h2>Project details</h2>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <div>
          <button onClick={() => this.onChange('users', 'tabName')} disabled={tabName === 'users'}>Users</button>
          <button onClick={() => this.onChange('todos', 'tabName')} disabled={tabName === 'todos'}>Todos</button>
        </div>
        {
          tabName === 'users' && <UserList project_id={this.props.match.params.id} />
        }
        {
          tabName === 'todos' && <TodoList project_id={this.props.match.params.id} />
        }
      </div>
    )
  }
}

ProjectDetails.defaultProps = {
}
export default ProjectDetails;
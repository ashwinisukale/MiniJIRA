import React from 'react';
import UserClient from '../../common/clients/UserClient';
import AddUser from './AddUser';
import User from './User';

class UserList extends React.Component {
  state= {
    users: []
  }

  updateUserList = () => UserClient.getUsers(this.props.project_id).then(res => this.setState({
    users: res.data
  }));

  componentDidMount() {
    this.updateUserList();
  }

  render() {
    const { users } = this.state;
    const {project_id} = this.props;
    return (
      <div>
        <h2>Project Users</h2>
        <AddUser onAdd={this.updateUserList} project_id={project_id}/>
        <ul>
        {
          users.map(user => <li key={user.id}>
          <User user={user} project_id={project_id} onRemove={this.updateUserList} />
            </li>)
        }
        </ul>
      </div>
    )
  }
}

export default UserList;
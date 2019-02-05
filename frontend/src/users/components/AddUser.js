import React from 'react';
import UserClient from '../../common/clients/UserClient';

class AddUser extends React.Component {
  state= {
    selectedUserId: undefined,
    users: []
  }

  addUser = () => {
    const { selectedUserId } = this.state
    UserClient.addUser([].push(selectedUserId), this.props.project_id).then(this.props.onAdd)
  }

  onChange = (value, type) => {
    this.setState({
      [type]: value
    });
  }

  componentDidMount() {
    UserClient.getAllUsers().then(res => this.setState({ users: res.data, selectedUserId: res.data[0] && res.data[0].id}))
  }

  render() {
    const { selectedUserId, users } = this.state;
    return (
      <div>
        <h2>Add User</h2>
        <div>
        <label>name</label>
        <select onChange={(e) => this.onChange(e.target.value, 'selectedUserId')} value={selectedUserId} >
          {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
        </div>
        <button onClick={this.addUser} > Add User</button>
      </div>
    )
  }
}

AddUser.defaultProps = {
  onAdd: () => {}
}
export default AddUser;
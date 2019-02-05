import React from 'react';
import UserClient from '../../common/clients/UserClient';

class SignUp extends React.Component {
  state= {
    name: '',
    email: '',
    password: ''
  }

  createUser = () => {
    console.log(this.props);
    UserClient.signUp(this.state).then(this.props.onAdd)
  }

  onChange = (value, type) => {
    this.setState({
      [type]: value
    });
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <h2>Create User</h2>
        <div>
        <label>Name</label>
        <input onChange={(e) => this.onChange(e.target.value, 'name')} value={name} />
        </div>
        <div>
        <label>Email</label>
        <input onChange={(e) => this.onChange(e.target.value, 'email')} value={email} />
        </div>
        <div>
        <label>Password</label>
        <input onChange={(e) => this.onChange(e.target.value, 'password')} value={password} type='password' />
        </div>
        <button onClick={this.createUser} > Create User</button>
      </div>
    )
  }
}

SignUp.defaultProps = {
  onAdd: () => {}
}
export default SignUp;
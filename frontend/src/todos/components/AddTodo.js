import React from 'react';
import TodoClient from '../../common/clients/TodoClient';

class AddTodo extends React.Component {
  state= {
    name: '',
    description: ''
  }

  addTodo = () => {
    console.log(this.props);
    TodoClient.addTodo(this.state, this.props.project_id).then(this.props.onAdd)
  }

  onChange = (value, type) => {
    this.setState({
      [type]: value
    });
  }

  render() {
    const { name, description } = this.state;
    return (
      <div>
        <h2>Add Todo</h2>
        <div>
        <label>name</label>
        <input onChange={(e) => this.onChange(e.target.value, 'name')} value={name} />
        </div>
        <div>
        <label>description</label>
        <input onChange={(e) => this.onChange(e.target.value, 'description')} value={description} />
        </div>
        <button onClick={this.addTodo} > Add Todo</button>
      </div>
    )
  }
}

AddTodo.defaultProps = {
  onAdd: () => {}
}
export default AddTodo;
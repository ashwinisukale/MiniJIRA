import React from 'react';
import ProjectClient from '../../common/clients/ProjectClient';

class AddProject extends React.Component {
  state= {
    name: '',
    description: ''
  }

  addProject = () => {
    ProjectClient.addProject(this.state).then(this.props.onAdd)
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
        <h2>Add Project</h2>
        <div>
        <label>name</label>
        <input onChange={(e) => this.onChange(e.target.value, 'name')} value={name} />
        </div>
        <div>
        <label>description</label>
        <input onChange={(e) => this.onChange(e.target.value, 'description')} value={description} />
        </div>
        <button onClick={this.addProject} > Add project</button>
      </div>
    )
  }
}

AddProject.defaultProps = {
  onAdd: () => {}
}
export default AddProject;
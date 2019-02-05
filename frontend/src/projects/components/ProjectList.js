import React from 'react';
import { connect } from 'react-redux';
import ProjectClient from '../../common/clients/ProjectClient';
import AddProject from './AddProject';
import {Link} from 'react-router-dom';

class ProjectList extends React.Component {
  state= {
    projects: []
  }

  updateProjectList = () => ProjectClient.getProjects().then(res => this.setState({
    projects: res.data
  }));

  componentDidMount() {
    this.updateProjectList();
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
      <h2>Projects</h2>
      {this.props.isAdmin ? <div>
      <AddProject onAdd={this.updateProjectList} />
      <ul>
      {
        projects.map(project => <li key={project.id}>
          <Link to={`/projects/${project.id}`} >{project.name}</Link>
          {project.description && ` - ${project.description}`}</li>)
      }
      </ul>
    </div> : 'Only for admins'}
    </div>
    )
  }
}


const mapStateToProps = (state) => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps)(ProjectList)
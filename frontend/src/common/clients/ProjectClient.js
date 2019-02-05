import axios from 'axios';

const ProjectClient = {
  getProjects: () => axios.get('/projects'),
  addProject: (data) => axios.post('/projects', data),
  getProjectDetails: (id) => axios.get(`/projects/${id}`)
}

export default ProjectClient;
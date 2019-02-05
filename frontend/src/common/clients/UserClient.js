import axios from 'axios';

const UserClient = {
  addUser: (data, project_id) => axios.put(`/projects/${project_id}`, {user_ids: data}),
  getUsers: (project_id) => axios.get(`/projects/${project_id}/users`),
  getAllUsers: () => axios.get('/users'),
  remove: (user_id, project_id) => axios.delete(`/users/${user_id}?project_id=${project_id}`),
  signUp: (data) => axios.post('/auth', {...data}),
}

export default UserClient;
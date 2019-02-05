import axios from 'axios';

const UserClient = {
  addUser: (data, project_id) => axios.put(`/projects/${project_id}`, {user_ids: data}),
  getUsers: (project_id) => axios.get(`/projects/${project_id}/users`),
  getAllUsers: () => axios.get('/users'),
  remove: (id) => axios.delete(`/users/${id}`)
}

export default UserClient;
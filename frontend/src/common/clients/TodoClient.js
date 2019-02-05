import axios from 'axios';

const TodoClient = {
  addTodo: (data, project_id) => axios.post('/todos', {...data, project_id}),
  getTodos: (project_id) => axios.get(`/projects/${project_id}/todos`),
  getDevTodos: () => axios.get(`/data`),
  remove: (id) => axios.delete(`/todos/${id}`),
  changeStatus: (id, status) => axios.put(`/todos/${id}/change_status?status=${status}`),
  getAdminTodos: (by) => axios.get(`/admin/data?${by}=true`)
}

export default TodoClient;
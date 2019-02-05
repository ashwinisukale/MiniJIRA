import axios from 'axios';

const DashboardClient = {
  adminGetData: () => axios.get('/admin/data')
}

export default DashboardClient;
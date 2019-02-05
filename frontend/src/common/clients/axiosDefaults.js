import axios from "axios";
const setDefaults = () => {
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.headers = {
    'access-token': '_DVGmQprv83MF-TdXOk7Ww',
    client: '6NX1E17rg98h4pR2GFTTcA',
    uid: 'admin@minijira.com',
    expiry: '1550510221'
  }
}

export default setDefaults;


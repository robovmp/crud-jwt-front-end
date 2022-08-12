import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crudrobovmp.herokuapp.com/',
});

export default api
import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://174.138.35.171/'
    baseURL: 'http://localhost:3333'
});

export default api;
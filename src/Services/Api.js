import axios from 'axios';

const api = axios.create({
    baseURL: 'http://174.138.35.171/'
});

export default api;
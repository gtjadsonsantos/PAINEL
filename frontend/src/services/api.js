import axios from 'axios';
import backend from '../config'

const api = axios.create({
    baseURL: backend.backend.url
})

export default api;


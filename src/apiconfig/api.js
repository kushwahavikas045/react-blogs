import axios from 'axios';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
})

export const createPost = async(formData) =>{
return await api.post('/posts', formData);
}

export default api;
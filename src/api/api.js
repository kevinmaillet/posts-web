import axios from 'axios';

axios.defaults.withCredentials = true


const worker = axios.create({
    withCredentials: true,
    baseURL: 'https://workers.kevinrmaillet314.workers.dev',
    headers: { crossDomain: true, 'Content-Type': 'application/json' }
});


export const addPost = (newPost) => {
    return worker.post('/posts', newPost).then((res) => res.data.data).catch((error) => error.response);
}

export const fetchPosts = () => {
    return worker.get('/posts').then((res) => res.data.data).catch((error) => error.response);
}
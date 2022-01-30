import axios from 'axios';

const worker = axios.create({
    withCredentials: true,
    baseURL: 'https://workers.kevinrmaillet314.workers.dev',

});


export const addPost = (newPost) => {
    return worker.post('/posts', newPost).then((res) => res.data.data);
}

export const fetchPosts = () => {
    return worker.get('/posts').then((res) => res.data.data);
}
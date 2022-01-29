import axios from 'axios';


export const addPost = (newPost) => {
    return axios.post('https://workers.kevinrmaillet314.workers.dev/posts', newPost).then((res) => res.data.data);
}

export const fetchPosts = () => {
    return axios.get('https://workers.kevinrmaillet314.workers.dev/posts').then((res) => res.data.data);
}
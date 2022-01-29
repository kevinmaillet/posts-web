import React from "react";
import Layout from './layout';
import { useQuery } from 'react-query';
import axios from 'axios';
import Form from '../components/form'
import Post from './post';


const Posts = () => {


    const fetchPosts = () => {
        return axios.get('https://workers.kevinrmaillet314.workers.dev/posts').then((res) => res.data.data);
    }


    const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);


    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        <Layout>
            <Form />
            <div className="container flex-auto w-64 mx-3">
                {data?.map(({ title, username, content }) => (
                    <Post title={title} username={username} content={content} />
                ))}
            </div>
        </Layout>
    );
};

export default Posts;
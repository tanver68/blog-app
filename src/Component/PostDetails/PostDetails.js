import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams()
    const [post ,setPost] = useState({})
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/comments/${postId}`;
      console.log(postId)
      fetch (url)
      .then(res => res.json())
      .then(data => setPost(data))
    },[])
     
    return (
        <div>
            <h3>Email: {post.email} </h3>
        </div>
    );
};

export default PostDetails;
import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';

const Post = (props) => {
    const{userId,id,title,body}=props.post
    return (
        <div className='post'>
            <h4>User Id: {userId} </h4>
            <h5>Id : {id} </h5>
            <h6> {title} </h6>
            <p>{body}</p>
            <p><Link to={`/post/${id}`} ><button>Details Post {id}</button></Link></p>
            
        </div>
    );
};

export default Post;
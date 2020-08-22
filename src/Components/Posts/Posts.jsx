import React from 'react';
import Post from './Post';
import './Posts.css';

function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map(
        (post)=> <Post key={post.id} post={post} user={props.user} deletePost={props.deletePost} addLike={props.addLikeThunkCreator}/>)
      }
    </div>
  );
}

export default Posts;

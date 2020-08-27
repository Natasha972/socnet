import React from 'react';
import './Posts.css';
import PostContainer from './PostContainer';

function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map(
        (post)=> <PostContainer key={post.id} post={post} user={props.user} deletePost={props.deletePost} addLike={props.addLikeThunkCreator}/>)
      }
    </div>
  );
}

export default Posts;

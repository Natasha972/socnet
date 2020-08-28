import React from 'react';
import './Posts.css';
import PostContainer from './PostContainer';

function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map(
        (post)=> <PostContainer key={post.id} post={post} user={props.user} deletePost={props.deletePost} addLike={props.addLikeThunkCreator}/>)
      }
      <div className="attribution">
        Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>

    </div>
  );
}

export default Posts;

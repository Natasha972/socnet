import React, { useState } from 'react'
import './Posts.css'
import PostTitle from './PostTitle'
import { Link } from 'react-router-dom'
import PostInfo from './PostInfo'

const Post= (props)=> {
  let imageSrc= '';
  if (props.post.image) {
    imageSrc= 'http://dynweb.loft:8888/images/'+props.post.image
  }
  return (
      <div className="container">
        <Link to={'/post/'+ props.post.id}>
          <PostTitle post={props.post} user={props.user} deletePost={props.deletePost} />
        </Link>
        <div className='post-content'>
          <p className="post-text">{props.post.text}</p>
          {imageSrc &&
            <div className='post-image'>
              <img  src={imageSrc}/>
            </div>
          }
        </div>
        <PostInfo post={props.post} addLike={props.addLike}/>
      </div>
  );
}
export default Post;
import React, { useState } from 'react'
import './Posts.css'
import PostTitle from './PostTitle'
import PostInfo from './PostInfo'
import AddNewForm from './../Forms/AddNewForm'
import Comment from './Comment'

const Post= (props)=> {
  let imageSrc= '';
  if (props.post.image) {
    imageSrc= 'http://dynweb.loft:8888/images/'+props.post.image
  }
  const [comments, setComments]= useState(false)
  const toggleCommentsShown= ()=> {
    if(!comments) {
      props.getCommentsThunkCreator(props.post.id)
      setComments(true)
    }
    else setComments(false)
  }
  return (
    <>
      <div className="container">
        <PostTitle post={props.post} user={props.user} deletePost={props.deletePost} />
        <div className='post-content'>
          <p className="post-text">{props.post.text}</p>
          {imageSrc &&
            <div className='post-image'>
              <img  src={imageSrc}/>
            </div>
          }
        </div>
        <PostInfo post={props.post} addLike={props.addLike} toggleCommentsShown={toggleCommentsShown}/>
      </div>
      {comments &&
        <div>
          <AddNewForm postId={props.post.id} submitHandler={props.addCommentThunkCreator} value='comment'/>
          <button >show comments</button>
          <div className='comments'>{props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}</div>
        </div>
      }
    </>

  );
}
export default Post;
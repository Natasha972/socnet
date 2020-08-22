import React from 'react'
import Preloader from './../common/Preloader/Preloader'
import AddNewForm from './../Forms/AddNewForm'
import PostTitle from './PostTitle'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import PostInfo from './PostInfo'

function PostPage(props) {
  if(!props.post) return <Preloader/>
  let imageSrc= '';
  if (props.post.image) {
    imageSrc= 'http://dynweb.loft:8888/images/'+props.post.image
  }
  return (
    <>
      <div className='container'>
        <Link to={'/post/'+ props.post.id}>
          <PostTitle post={props.post}/>
        </Link>
        <div className='post-content'>
          <p>{props.post.text}</p>
          <div className='post-image'>
            <img  src={imageSrc}/>
          </div>
        </div>
        <PostInfo post={props.post}/>
      </div>
      <AddNewForm postId={props.post.id} submitHandler={props.addCommentThunkCreator} value='comment'/>
      <div className='comments'>{props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}</div>
    </>
  )
}
export default PostPage

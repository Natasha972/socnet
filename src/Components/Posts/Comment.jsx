import React from 'react'
import PostTitle from './PostTitle'

function Comment(props) {
  let imageSrc= '';
  if (props.comment.image) {
    imageSrc= 'http://dynweb.loft:8888/images/'+props.comment.image
  }
  return (
    <div className='container'>
      <PostTitle post={props.comment}/>
      <p>{props.comment.text}</p>
      <img className='post-image' src={imageSrc}/>
    </div>
  )
}
export default Comment

import React from 'react'
import './Posts.css'
import Avatar from '../common/Avatar/Avatar'

function PostTitle(props) {
  const handleClick=()=> {
    props.deletePost(props.post.id)
  }
  return (
    <div className='post-title'>
      <Avatar classname='small' avatar={props.post.avatar}/>
      <span className='post-author'>{props.post.author_name}</span>
      <span className='post-date'>{props.post.date}</span>
      {props.deletePost && props.user && (props.user.id===props.post.author) && <button onClick={handleClick}>delete</button>}
    </div>
  )
}
export default PostTitle

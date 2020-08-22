import React from 'react'
import comments from './../../images/comment.svg'
import likes from './../../images/likes.svg'
import views from './../../images/views.svg'

function PostInfo({post, addLike}) {
  const handleLikeClick= ()=> {
    addLike(post.id)
  }
  return (
    <div className='post-info'>
      <div>
        <img onClick={handleLikeClick} src={likes}/>
        <span>{post.likes}</span>
      </div>
      <div>
        <img src={comments}/>
        <span>{post.comments}</span>
      </div>
      <div>
        <img src={views}/>
        <span>{post.views}</span>
      </div>
    </div>
  )
}
export default PostInfo

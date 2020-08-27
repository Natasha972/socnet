import React from 'react'
import {getCommentsThunkCreator, addCommentThunkCreator} from './../../redux/post-reducer'
import Post from './Post'
import { connect } from 'react-redux'

function PostContainer(props) {
  return (
    <Post {... props}/>
  )
}
let mapStateToProps= (state)=> {
  return {
    comments: state.post.comments
  }
}

export default connect (mapStateToProps, {getCommentsThunkCreator, addCommentThunkCreator}) (PostContainer)

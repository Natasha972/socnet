import React from 'react'
import Posts from './Posts'
import { connect } from 'react-redux'
import {addLikeThunkCreator} from './../../redux/posts-reducer'

 class PostsContainer extends React.Component {
  render() {
    return (
      <Posts {...this.props}/>
    )
  }
}
export default connect(null, {addLikeThunkCreator})(PostsContainer)
import React from 'react'
import { connect } from 'react-redux'
import {getPostsThunkCreator} from '../../redux/posts-reducer'
import PostsContainer from '../Posts/PostsContainer'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.getPostsThunkCreator()
  }
  render() {
    return <PostsContainer posts={this.props.posts}/>
  }
}

let mapStateToProps= (state)=> {
  return {
    posts: state.posts.posts
  }
}
export default connect(mapStateToProps, {getPostsThunkCreator})(HomeContainer)

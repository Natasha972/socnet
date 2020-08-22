import React from 'react'
import { connect } from 'react-redux'
import { getPostPageThunkCreator, addCommentThunkCreator} from '../../redux/post-reducer'
import PostPage from './PostPage'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'


class PostPageContainer extends React.Component {
  componentDidMount() {
    const postId= this.props.match.params.postId
    this.props.getPostPageThunkCreator(postId)
  }
  render() {
    return (
      <PostPage {...this.props} />
    )
  }
}
let mapStateToProps= (state)=> {
  return {
    post: state.post.post,
    comments: state.post.comments
  }
}
export default compose(withRouter, connect(mapStateToProps,{ getPostPageThunkCreator, addCommentThunkCreator }))(PostPageContainer)
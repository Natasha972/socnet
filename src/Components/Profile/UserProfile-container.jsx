import React from 'react';
import UserProfile from './UserProfile';
import { getUserProfileThunkCreator, followUserThunkCreator, unfollowUserThunkCreator } from '../../redux/userprofile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class UserProfileContainer extends React.Component{
  componentDidMount(){
    let userId= this.props.match.params.userId;
    this.props.getUserProfileThunkCreator(userId);
  }
  render() {
    return <UserProfile {...this.props} />
  }
}
let mapStateToProps= (state)=> {
  return {
    posts: state.user.posts,
    user: state.user.user,
    isFollowing: state.user.followingInProgress
  }
}
export default compose(connect(mapStateToProps,{getUserProfileThunkCreator, followUserThunkCreator, unfollowUserThunkCreator}), withRouter)(UserProfileContainer)
import React from 'react';
import {getMyProfileThunkCreator,
        updateStatusThunkCreator, updateAvatarThunkCreator, updateProfileThunkCreator} from '../../redux/myprofile-reducer';
import {addPostThunkCreator, deletePostThunkCreator, addLikeThunkCreator} from './../../redux/posts-reducer'
import {logoutThunkCreator} from '../../redux/app-reducer';
import { connect } from 'react-redux';
import MyProfile from './MyProfile';
import {  Redirect } from 'react-router-dom';

class MyProfileContainer extends React.Component{
  componentDidMount() {
    this.props.getMyProfileThunkCreator();
  }
  render() {
    if(!this.props.islogin) {
      return <Redirect to='/login'/>
    }
    return <MyProfile {...this.props}/>
  }
}
let mapStateToProps= (state)=> {
  return {
    posts: state.posts.posts,
    newPostText: state.profile.newPostText,
    user: state.profile.user,
    islogin: state.app.islogin
  }
}
export default connect(mapStateToProps, {addPostThunkCreator, updateAvatarThunkCreator,
                      getMyProfileThunkCreator, updateStatusThunkCreator, logoutThunkCreator,
                      deletePostThunkCreator, updateProfileThunkCreator})
                      (MyProfileContainer);
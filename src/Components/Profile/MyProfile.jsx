import React, { useState} from 'react';
import '../Profile/Profile.css';
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo'
import Avatar from '../common/Avatar/Avatar';
import Status from './Status';
import AddNewForm from '../Forms/AddNewForm'
import UpdateProfileForm from '../Forms/UpdateProfileForm';
import PostsContainer from '../Posts/PostsContainer';

function MyProfile(props) {
  const [editMode, setEdit]= useState(false)
  const activeEditMode=()=> {
    setEdit(true)
  }
  const deactiveEditMode=()=> {
    setEdit(false)
  }
  if(!props.user){
    return <Preloader/>
  }
  const onFileChoosen=(e)=> {
    const successHandler=()=> {

    }
    if(e.target.files[0]) {
      props.updateAvatarThunkCreator(e.target.files[0], successHandler)
    }
  }
  return (
    <div className="Profile">
      <div className='user'>
      <div className='my-avatar'>
        <Avatar classname="large" avatar={props.user.avatar}/>
        <input id='avatar' type='file' onChange={onFileChoosen}></input>
        <label htmlFor='avatar'>update</label>
      </div>
        <div className='user-name'>
          <p>{props.user.firstname+' '+props.user.lastname}</p>
          <Status status={props.user.status} updateStatus={props.updateStatusThunkCreator}/>
          <div>
            <button onClick={props.logoutThunkCreator}>exit</button>
            <button onClick={activeEditMode}>edit</button>
          </div>
        </div>
      </div>
      <ProfileInfo user={props.user}/>
      {editMode && (
      <div className='profile-form'>
        <UpdateProfileForm user={props.user} updateProfile={props.updateProfileThunkCreator} deactiveEditMode={deactiveEditMode}/>
      </div>
      )}
      <AddNewForm submitHandler={props.addPostThunkCreator} value='new post text'/>
      <PostsContainer user={props.user} posts={props.posts} deletePost={props.deletePostThunkCreator}/>
    </div>
  );
}
export default MyProfile;
import React from 'react';
import './Profile.css';
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo';
import Avatar from '../common/Avatar/Avatar';
import { Link } from 'react-router-dom';
import PostsContainer from '../Posts/PostsContainer';

function UserProfile(props) {
  if(!props.user){
    return <Preloader/>
  }
  let toggleFollow = () => {
    if(props.user.subscription) {
      props.unfollowUserThunkCreator(props.user.id);
    }else {
      props.followUserThunkCreator(props.user.id);
    }
  };
  return (
    <div className="Profile">
      <div className= 'user'>
        <Avatar classname="large" avatar={props.user.avatar}/>
        <div className='user-name'>
          <p>{props.user.firstname+' '+props.user.lastname}</p>
          <span>{props.user.status}</span>
          <span>last seen: {props.user.lastseen}</span>
          <div>
            <button disabled={props.isFollowing} onClick={toggleFollow}>
              {props.user.subscription? "unfollow" : "follow"}
            </button>
            <Link to={'/messages/'+ props.user.id}><button>Message</button></Link>
          </div>
        </div>
      </div>
      <ProfileInfo user={props.user}/>
      <PostsContainer posts={props.posts} user={props.user}/>
    </div>
  );
}
export default UserProfile;
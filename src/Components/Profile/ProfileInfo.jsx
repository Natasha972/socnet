import React from 'react';
import './Profile.css'

function ProfileInfo(props) {
  return (
  <>
    <div className="profile-info">
      <p>{props.user.country+' '+props.user.cityname}</p>
      <p>birthdate {props.user.birthdate}</p>
    </div>
  </>
  );
}
export default ProfileInfo;
import React from 'react';
import './avatarStyles.css';
import avatarImg from '../../../images/167.jpg'
import Preloader from '../Preloader/Preloader';

let Avatar= (props)=> {
  if (!props.classname) {
    return <Preloader/>
  }
  let avatarSrc= avatarImg;
  if (props.avatar) {
    avatarSrc= 'http://dynweb.loft:8888/avatars/'+props.avatar
  }
  let classname= "avatar ";
  classname+= props.classname;
  return (
    <img className={classname} alt="avatar"  src={avatarSrc}/>
  )
}
export default Avatar;
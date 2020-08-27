import React from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";
import Avatar from "../common/Avatar/Avatar";

function User({user}) {
  return (
    <div className="User">
      <Avatar classname="small" avatar={user.avatar}/>
      <NavLink to={"/users/"+ user.id}>
        <div className="user-info">
          <span>{user.firstname + ' '+ user.lastname}</span>
          <span>{user.cityname}</span>
        </div>
      </NavLink>
      <span>lastseen:{user.lastseen}</span>
      <div>{user.subscription&&'s'}</div>
    </div>
  );
}

export default User;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav= ()=> {
  return (
    <div className="nav">
      <NavLink to="/profile" >profile</NavLink>
      <NavLink to="/users" >users</NavLink>
      <NavLink to="/chats" >chats</NavLink>
    </div>
  );
}

export default Nav;
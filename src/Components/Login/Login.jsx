import React from 'react'
import LoginForm from '../Forms/LoginForm';
import {loginThunkCreator } from '../../redux/app-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login= (props)=> {
  if(props.islogin) {
    return (
      <Redirect to='/Profile'/>
    )
  }
  return (
      <LoginForm login={props.loginThunkCreator}/>
  )

}

let mapStateToProps= (state)=> {
  return {
    islogin: state.app.islogin
  }
}

export default connect(mapStateToProps,{loginThunkCreator})(Login);
import React from 'react'
import {registerThunkCreator } from '../../redux/app-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from '../Forms/RegistrationForm';

const Registration= (props)=> {
  if(props.islogin) {
    return (
      <Redirect to='/Profile'/>
    )
  }
  return (
      <RegistrationForm {...props} register={props.registerThunkCreator}/>
  )
}
let mapStateToProps= (state)=> {
  return {
    islogin: state.app.islogin
  }
}
export default connect(mapStateToProps,{registerThunkCreator})(Registration);
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuthRedirect= (Component)=> {
  class isloginRedirect extends React.Component {
    render() {
      if(!this.props.islogin){return <Redirect to= "/login"/>}
      return <Component {...this.props}/>
    }
  }

  let mapStateToProps= (state)=> {
    return {
      islogin: state.auth.user.islogin
    }
  }

  return connect(mapStateToProps)(isloginRedirect);
}
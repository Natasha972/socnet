import React from 'react';
import './Chats.css';
import Chats from './Chats';
import { connect } from 'react-redux';
import {getMyChatsThunkCreator} from './../../redux/chats-reducer'
import { Redirect } from 'react-router-dom';

class ChatsContainer extends React.Component {
  componentDidMount(){
    this.props.getMyChatsThunkCreator();
  }
  render() {
    if(!this.props.islogin) {
      return <Redirect to='/login'/>
    }
    return <Chats {...this.props}/>
  }
}
let mapStateToProps= (state)=> {
  return {
    chats: state.chats.chats,
    islogin: state.app.islogin
  }
}
export default connect(mapStateToProps, {getMyChatsThunkCreator})(ChatsContainer);

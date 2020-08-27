import {sendMessageThunkCreator, getMessagesThunkCreator} from '../../redux/messages-reducer';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import MessagesPage from './Messages-page'
import React from 'react'
import { compose } from 'redux';

class MessagesContainer extends React.Component {
  componentDidMount(){
    let chatId= this.props.match.params.chatId
    this.props.getMessagesThunkCreator(chatId);
  }
  render() {
    return (
      <MessagesPage {...this.props} />
    )
  }
}
let mapStateToProps= (state)=> {
  return {
    messages: state.messages.messages,
    myId: state.app.userId
  }
}
export default compose(connect(mapStateToProps, {sendMessageThunkCreator, getMessagesThunkCreator}), withRouter)(MessagesContainer);

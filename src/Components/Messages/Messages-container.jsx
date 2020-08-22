import {sendMessageThunkCreator, getMessagesThunkCreator} from '../../redux/messages-reducer';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import MessagesPage from './Messages-page'
import React from 'react'
import { compose } from 'redux';

class MessagesContainer extends React.Component {
  componentDidMount(){
    let userId= this.props.match.params.userId
    this.props.getMessagesThunkCreator(userId);
  }
  render() {
    return (
      <MessagesPage {...this.props} user={this.props.match.params.userId}/>
    )
  }
}
let mapStateToProps= (state)=> {
  return {
    messages: state.messages.messages
  }
}
export default compose(connect(mapStateToProps, {sendMessageThunkCreator, getMessagesThunkCreator}), withRouter)(MessagesContainer);

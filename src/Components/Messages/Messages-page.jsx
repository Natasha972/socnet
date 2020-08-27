import React from 'react';
import AddNewForm from '../Forms/AddNewForm'
import './Messages.css'
import Preloader from '../common/Preloader/Preloader';
import './../common/scrollbar.css'
import Messages from './Messages';

function MessagesPage(props) {
  if(!props.messages)return <Preloader/>
  return (
    <>
      <Messages messages={props.messages} myId={props.myId}/>
      <AddNewForm className='add-message' submitHandler={props.sendMessageThunkCreator} user={props.user} value=''/>
    </>
  );
}
export default MessagesPage;

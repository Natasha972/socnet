import React from 'react';
import './Chats.css'
import Chat from './Chat';

function Chats(props) {
  return (
    <div className="chats">
        {props.chats.map((chat)=><Chat key={chat.chat} chat={chat}/>)}
    </div>
  );
}
export default Chats;

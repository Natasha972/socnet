import React from 'react'
import { Link } from 'react-router-dom'
import './Chats.css'

function Chat(props) {
  return (
    <div className='chat'>
    <Link to={'/messages/'+props.chat.user_id}>
      <div>
        <span>{props.chat.chat_name}</span>
        <span>{props.chat.date}</span>
      </div>
    </Link>
      <p>{props.chat.text}</p>
    </div>
  )
}
export default Chat

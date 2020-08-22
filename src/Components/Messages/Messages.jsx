import React, { useEffect, useRef } from 'react'
import './Messages.css'
import Message from './Message'

const Messages = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom);

  return (
    <div className="messages">
      {messages.map(message => <Message key={message.id} message={message} />)}
      <div ref={messagesEndRef} />
    </div>
  )
}
export default Messages
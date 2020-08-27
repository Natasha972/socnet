import React from 'react'

function Message(props) {
  let imageSrc= '';
  if (props.message.image) {
    imageSrc= 'http://dynweb.loft:8888/images/'+props.message.image
  }
  let classname='left'
  if(props.myId===props.message.sender){
    classname='right'
  }
  return (
    <div className={'message '+ classname}>
      <span>{props.message.date}</span>
      <p>{props.message.text}</p>
      <img className='post-image' src={imageSrc}/>
    </div>
  )
}
export default Message

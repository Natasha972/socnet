import React from 'react';

function AddNewPostForm(props) {
  let buttonClickHandler= ()=> {
    props.addPost();
  }
  let changeHandler= (e)=> {
    let text= e.target.value;
    props.updateText(text);
  }
  return (
    <div className="AddNewPostForm">
      <input  onChange={changeHandler} value={props.newPostText}></input>
      <button className="button" onClick={buttonClickHandler}>add post</button>
    </div>
  );
}
export default AddNewPostForm;
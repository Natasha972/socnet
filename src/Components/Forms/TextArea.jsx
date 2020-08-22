import React from 'react';
import {Field, ErrorMessage} from 'formik';

function TextArea(props) {
  const {label, name, ...rest}= props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field className='input' as='textarea' name={name} id={name} {...rest}/>
    </div>
  )
}

export default TextArea;
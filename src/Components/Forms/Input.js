import React from 'react';
import {Field, ErrorMessage} from 'formik';

function Input(props) {
  const {label, name, ...rest}= props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field  name={name} id={name} {...rest}/>
      <div className="error"><ErrorMessage name={name}/></div>
    </div>
  )
}
export default Input;

import React from 'react';
import {Field, ErrorMessage} from 'formik';

function Checkbox(props) {
  const {label, name, ...rest}= props;
  return (
    <div className='form-control'>
      <Field  name={name} id={name} {...rest}/>
      <label htmlFor={name}>{label}</label>
      <div className="error"><ErrorMessage name={name}/></div>
    </div>
  )
}

export default Checkbox;

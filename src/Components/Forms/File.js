import React from 'react';
import {Field, ErrorMessage} from 'formik';

function File(props) {

  const {label, name, setSpanText,...rest}= props;
  return (
    <>
      <Field  name={name} {...rest}>
        {
          ({form, field})=> {
            console.log(field)
            const {setFieldValue}= form
            return <input  id={name} type="file" onChange={(event) => {
                    setFieldValue( name, event.currentTarget.files[0]);
                    setSpanText(event.currentTarget.files[0].name)}
                    }
                  />
          }
        }
      </Field>
      <label htmlFor={name}>{label}</label>
    </>
  )
}

export default File;

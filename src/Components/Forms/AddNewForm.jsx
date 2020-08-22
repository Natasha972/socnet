import React, { useState } from 'react';
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'

function AddPostForm(props) {
  const [filename,setFileName]= useState('');
  const setSpanText= (text)=> {
    setFileName(text)
  }
  const initialValues= {
    image: '',
    text: props.value
  }
  const validationSchema= Yup.object({
    text: Yup.string()
  })
  const onSubmit= (values, onSubmittingProps)=> {
    const errorHandler= (response)=> {
      alert(response);
    }
    const successHandler= ()=> {
      onSubmittingProps.resetForm(initialValues)
      setSpanText('')
    }

    props.submitHandler(values, successHandler, errorHandler, props)
    onSubmittingProps.setSubmitting(false);
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form className='container'>
              <FormikControl className='input' control='textarea' name='text' label=''/>
              <div className='add-post'>
                <FormikControl control='file' name='image' label='upload image' setSpanText={setSpanText}/>
                <span className='file-name'>{filename}</span>
                <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
              </div>
            </Form>
          )
        }
      }
    </Formik>
  )
}
export default AddPostForm;

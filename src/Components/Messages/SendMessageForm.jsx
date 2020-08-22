import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from '../Forms/FormikControl'
import * as Yup from 'yup'

function SendMessageForm(props) {
  const initialValues= {
    text: ''
  }
  const validationSchema= Yup.object({
  })
  const onSubmit= (values, onSubmittingProps)=> {
    const errorHandler= (response)=> {
      alert(response);
    }
    const successHandler= ()=> {
      onSubmittingProps.resetForm(initialValues)
    }
    onSubmittingProps.setSubmitting(false);

    props.sendMessage(values.text, props.user, errorHandler, successHandler)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form>
              <FormikControl control='textarea' name='text' label='' className='input'/>
              <button className='button' type='submit' disabled={!formik.isValid || formik.isSubmitting}>send</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}
export default SendMessageForm;

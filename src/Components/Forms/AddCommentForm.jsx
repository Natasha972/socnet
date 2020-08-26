import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'

function AddCommentForm(props) {
  const initialValues= {
    text: ''
  }
  const validationSchema= Yup.object({
  })
  const onSubmit= (values, onSubmittingProps)=> {
    const successHandler= ()=> {
      onSubmittingProps.resetForm(initialValues)
    }
    onSubmittingProps.setSubmitting(false);

    props.addComment(values.text, props.postId, errorHandler, successHandler)
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
export default AddCommentForm;

import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'


function UpdateAvatarForm(props) {
  const initialValues= {
    avatar: '',
  }

  const onSubmit= (values, onSubmittingProps)=> {
    let formData= values
    const errorHandler= (response)=> {
      alert(response);
      onSubmittingProps.setSubmitting(false);
    }
    console.log(formData)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form>
              <FormikControl control='input' name='avatar' type='file' label='Choose file' className='input'/>
              <button className='button' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default UpdateAvatarForm;

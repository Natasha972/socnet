import React from 'react'
import {Formik, Form, Field} from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'
import './Form.css'
import { Link } from 'react-router-dom'

function LoginForm(props) {
  const initialValues= {
    email: '',
    password: 'charli2204',
    remember: false
  }
  const validationSchema= Yup.object({
    email: Yup.string().email('No valid e-mail').required('Required'),
    password: Yup.string().required('Required')
  })
  const onSubmit= (values, onSubmittingProps)=> {
    let formData= values
    const errorHandler= (response)=> {
      alert(response);
      onSubmittingProps.setSubmitting(false);
    }
    props.login(formData, errorHandler)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form className='container'>
              <FormikControl control='input' name='email' type='email' label='E-mail' className='input'/>
              <FormikControl control='input' name='password' type='password' label='Password' className='input'/>
              <FormikControl control='checkbox' name='remember' type='checkbox' label='remember me' className='custom-checkbox'/>
              <div className='button-container'>
                <button className='button' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                <span>or</span>
                <Link to='/registration'>Sign up</Link>
              </div>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm;

import React from 'react';
import {Formik, Form} from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup'
import { formatDate } from './UpdateProfileForm';

function RegistrationForm(props) {

  const initialValues= {
    firstname: '',
    lastname: '',
    cityname: '',
    country: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const validationSchema= Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('No valid e-mail').required('Required'),
    password: Yup.string().min(6, "Password must be 6 or more simbols").required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
  })
  const onSubmit= (values, onSubmittingProps)=> {
    let formData= {...values, birthdate: formatDate(values.birthdate)}
    const errorHandler= (response)=> {
      alert(response);
      onSubmittingProps.setSubmitting(false);
    }
    props.register(formData, errorHandler)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form className='container'>
              <FormikControl className='input' control='input' name='firstname' type='text' label='First Name'/>
              <FormikControl className='input' control='input' name='lastname' type='text' label='Last Name'/>
              <FormikControl className='input' control='input' name='cityname' type='text' label='City Name'/>
              <FormikControl className='input' control='input' name='country' type='text' label='Country'/>
              <FormikControl className='input' control='input' name='email' type='email' label='E-mail'/>
              <FormikControl className='input' control='input' name='birthdate' placeholder='01.01.2020' label='Birth date'/>
              <FormikControl className='input' control='input' name='password' type='password' label='Password'/>
              <FormikControl className='input' control='input' name='confirmPassword' type='password' label='Confirm Password'/>
              <button className='button' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}
export default RegistrationForm;
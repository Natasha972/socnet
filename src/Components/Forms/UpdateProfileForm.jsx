import React from 'react';
import {Formik, Form} from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup'

function UpdateProfileForm(props) {
  const initialValues= {
    firstname: props.user.firstname,
    lastname: props.user.lastname,
    birthdate: '',
    city: props.user.cityname,
    country: props.user.country,
  }
  const validationSchema= Yup.object({
    firstname: Yup.string(),
    lastname: Yup.string(),
    birthdate: Yup.string().matches(/^\d{1,2}\.\d{1,2}\.\d{4}$/, 'wrong format',{ excludeEmptyString: true }),
    city: Yup.string(),
    country: Yup.string(),
  })
  const onSubmit= (values, onSubmittingProps)=> {
    values={...values, birthdate: formatDate(values.birthdate)}
    console.log(values)
    const errorHandler= (response)=> {
      alert(response);
    }
    const successHandler= ()=> {
      onSubmittingProps.resetForm(initialValues)
    }
    onSubmittingProps.setSubmitting(false);
    props.updateProfile(values, errorHandler, successHandler)
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=> {
          return (
            <Form className='container'>
              <FormikControl className='input' control='input' name='firstname' type='text' label='First Name'/>
              <FormikControl className='input' control='input' name='lastname' type='text' label='Last Name'/>
              <FormikControl className='input' control='input' name='birthdate' placeholder='01.01.2020' label='Birth date'/>
              <FormikControl className='input' control='input' name='city' type='text' label='City Name'/>
              <FormikControl className='input' control='input' name='country' type='text' label='Country'/>
              <button className='button' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Update</button>
              <button className='button' onClick={props.deactiveEditMode}>cancel</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}
export default UpdateProfileForm;
function formatDate(date) {
   return (
     date.slice(6)+'.'+
     date.slice(3,5)+'.'+
     date.slice(0,2)
   )
}

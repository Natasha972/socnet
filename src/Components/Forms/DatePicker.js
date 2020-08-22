import React from 'react';
import {Field, ErrorMessage} from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker(props) {
  const {label, name,  ...rest}= props;
  return (
    <div className='form-control'>
      <label className='label' htmlFor={name}>{label}</label>
      <Field  name={name}  {...rest}>
        {
          ({form, field})=> {
            const {setFieldValue}= form
            const {value}= field
            return <DateView dateFormat='dd.MM.yyy' id={name} {...field} {...rest} selected={value} onChange={(val)=> setFieldValue(name, val)}
            showYearDropdown dateFormatCalendar="MMMM" yearDropdownItemNumber={15} scrollableYearDropdown/>
          }
        }
      </Field>
      <div className="error"><ErrorMessage name={name}/></div>
    </div>
  )
}

export default DatePicker;
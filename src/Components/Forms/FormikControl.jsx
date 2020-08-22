import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import DatePicker from './DatePicker';
import File from './File'
import Checkbox from './Checkbox';

function FormikControl(props) {
  const {control, ...rest} = props
  switch (control) {
    case 'input': return <Input {...rest}/>
    case 'checkbox': return <Checkbox {...rest}/>
    case 'file': return <File {...rest}/>
    case 'textarea': return <TextArea {...rest}/>
    case 'date': return <DatePicker {...rest}/>
    default: return null;
  }
}

export default FormikControl;

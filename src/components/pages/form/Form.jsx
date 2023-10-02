import { Button, TextField } from '@mui/material';
import './Form.css';
import React from 'react';

const Form = () => {
  return (
    <form action="" className="form-container">
        <h2>Form</h2>
      <TextField className='textField' type='text' label="Name" variant="outlined" />
      <TextField className='textField' type='email' label="Email" variant="outlined" />
      <TextField className='textField' type='password' label="Password" variant="outlined" />
      <Button className='button' type='submit' variant='outlined' >Submit</Button>
    </form>
  );
};

export default Form;

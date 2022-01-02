import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../own.css';

const Register = () => {
  return (
    <div className='register-background'>
      <Form className='register-form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Enter Your Full Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your full name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Enter Your Phone Number</Form.Label>
          <Form.Control type='number' placeholder='Enter your phone number' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type='password' placeholder='Confirm password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const logForm = () => {
    const [useForData, setUseForData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login] = useMutation(LOGIN_USER);const handInputChange = (event) => {
        const { name, value } = event.target;
        setUseForData({ ...useForData, [name]: value });
      };
    
      const handFormSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        try {
          const { data } = await login({ variables: { ...useForData } });
    
          if (!data) {
            throw new Error("Something is wrong!");
          }
    
          Auth.login(data.login.token);
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }
    
        setUseForData({
          username: "",
          email: "",
          password: "",
        });
      };
      return (
        <>
          <Form noValidate validated={validated} onSubmit={handFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              Wrong login credentials!
            </Alert>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='email please'
                name='email'
                onChange={handInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type='invalid'>Email is required to see Pokemon!</Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='password please'
                name='password'
                onChange={handInputChange}
                value={useForData.password}
                required
              />
              <Form.Control.Feedback type='invalid'>Password is required to see POKEMON!</Form.Control.Feedback>
            </Form.Group>
            <Button
              disabled={!(useForData.email && useForData.password)}
              type='submit'
              variant='success'>
              Submit
            </Button>
          </Form>
        </>
      );
    };
    
    export default logForm;
    
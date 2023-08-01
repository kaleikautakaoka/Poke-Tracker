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
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const signForm = () => {
  const [useForData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const handInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...useForData, [name]: value });
  };



  const handForSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...useForData } });
      if (!data) {
        throw new Error("Something is wrong!");
      }

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handForSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Error with signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pokemon Trainer username"
            name="username"
            onChange={handInputChange}
            value={useForData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username needed!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handInputChange}
            value={useForData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email needed!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handInputChange}
            value={useForData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password needed!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              useForData.username &&
              useForData.email &&
              useForData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default signForm;
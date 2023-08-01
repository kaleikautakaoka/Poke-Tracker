import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [useForData, setUseForData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);
  const handInputChange = (event) => {
    const { name, value } = event.target;
    setUseForData({ ...userFormData, [name]: value });
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

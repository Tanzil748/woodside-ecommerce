import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const Register = () => {
  return (
    <Container>
      <Form
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 145px)" }}
      >
        <h1>Register Account</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User name</Form.Label>
          <Form.Control type="userName" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div
          type="submit"
          className="mb-3 btn"
          style={{ backgroundColor: "#aad576" }}
        >
          Sign Up
        </div>
        <p className="mb-0">Already have an account?</p>
        <a href="/signin">Sign In</a>
      </Form>
    </Container>
  );
};

export default Register;

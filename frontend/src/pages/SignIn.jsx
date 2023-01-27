import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const SignIn = () => {
  return (
    <Container>
      <Form
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 160px)" }}
      >
        <h1>Sign In</h1>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Sign In
        </Button>
        <p className="mb-0">Don't have an account?</p>
        <a href="/register">Register Account</a>
      </Form>
    </Container>
  );
};

export default SignIn;

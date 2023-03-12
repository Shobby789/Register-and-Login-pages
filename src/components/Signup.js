import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        className="p-4 mx-auto shadow rounded"
        style={{ width: "500px", marginTop: "100px" }}
      >
        <h2 className="text-center mt-3 mb-3 fw-bold">Sign up</h2>
        <FormGroup floating>
          <Input
            id="name"
            placeholder="Full Name"
            type="text"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
          />
          <Label for="confirm-password">Full Name</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="Password"
            placeholder="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
          />
          <Label for="Password">Password</Label>
        </FormGroup>
        <Button color="success" type="submit">
          Sign up
        </Button>
        <a href="/" className="float-end">
          Alread have account?
        </a>
      </Form>
    </>
  );
}

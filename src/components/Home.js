import React from "react";
import { Button, Container } from "reactstrap";

export default function Home() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <Container className="border border-secondary w-50 text-center p-5 rounded">
        <h2>Welcome To Home Screen</h2>
        <Button color="success">Logout</Button>
      </Container>
    </div>
  );
}

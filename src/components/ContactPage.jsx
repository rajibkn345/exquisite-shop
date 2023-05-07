import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container>
      <h2 className="mt-5 text-center">Contact Us</h2>
      <Row className="my-3 ">
        <Col md={6} className="px-5">
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter the subject" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button className="shop-btn my-3" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="px-5" md={6}>
          <h5>Our Address</h5>
          <p>123 Beauty Street</p>
          <p>New York, NY 10001</p>
          <h5>Phone</h5>
          <p>(555) 555-5555</p>
          <h5>Email</h5>
          <p>info@beautyshop.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;

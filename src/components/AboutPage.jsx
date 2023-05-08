import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="px-3" md={6}>
          <h2>About Our Beauty Shop</h2>
          <p>
            Our beauty shop is dedicated to providing the highest quality beauty
            products and services to our customers. We offer a wide range of
            skincare, haircare, and makeup products from top brands in the
            industry. Our team of experienced and licensed beauty professionals
            are passionate about helping our customers look and feel their best.
          </p>
        </Col>
        <Col className="p-3" md={6}>
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFib3V0JTIwdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="About Us"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="mt-5 about-team py-3">
        <Col className="p-3" md={6}>
          <img
            src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Our Team"
            className="img-fluid"
          />
        </Col>
        <Col className="px-3" md={6}>
          <h2>Meet Our Team</h2>
          <p>
            Our team of beauty professionals is made up of licensed
            estheticians, cosmetologists, and makeup artists who are dedicated
            to providing exceptional service to our customers. We are passionate
            about staying up-to-date with the latest trends and techniques in
            the industry, and we are committed to ongoing education and training
            to ensure that we are always providing the best possible service.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

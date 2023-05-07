import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ComingSoonPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col md={12} className="text-center">
          <h1>Coming Soon</h1>
          <p>We are currently working hard to bring you something amazing!</p>
          {/* <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ComingSoonPage;

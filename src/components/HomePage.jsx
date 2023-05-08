import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import col1 from "../assets/1.png";
import col2 from "../assets/2.png";
import col3 from "../assets/3.png";
import col4 from "../assets/4.png";
const HomePage = () => {
  return (
    <div>
      <div className="image-content-parent">
        <Image
          className="image-content"
          src={Banner1}
          width={"100%"}
          alt="Banner1"
        />
      </div>
      <Row>
        <Col>
          <Image src={col1} alt="col1" width={"100%"} />
        </Col>
        <Col>
          <Image src={col2} alt="col2" width={"100%"} />
        </Col>
        <Col>
          <Image src={col3} alt="col3" width={"100%"} />
        </Col>
        <Col>
          <Image src={col4} alt="col4" width={"100%"} />
        </Col>
      </Row>
      <div>
        <Image src={Banner2} width={"100%"} alt="Banner2" />
      </div>
      <div>
        <Image src={Banner3} width={"100%"} alt="Banner3" />
      </div>
    </div>
  );
};

export default HomePage;

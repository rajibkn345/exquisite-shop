import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Facial Cleanser",
      description: "A gentle yet effective cleanser for all skin types",
      price: 25.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      name: "Hair Serum",
      description: "A nourishing serum for shiny, healthy hair",
      price: 18.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      name: "Lipstick",
      description:
        "A long-lasting, highly-pigmented lipstick in a variety of shades",
      price: 12.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      name: "Facial Cleanser",
      description: "A gentle yet effective cleanser for all skin types",
      price: 25.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      name: "Hair Serum",
      description: "A nourishing serum for shiny, healthy hair",
      price: 18.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      name: "Lipstick",
      description:
        "A long-lasting, highly-pigmented lipstick in a variety of shades",
      price: 12.99,
      image:
        "https://plus.unsplash.com/premium_photo-1677343082384-a2fd8079d570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <Container>
      <h2 className="mt-5 text-center">Shop Our Products</h2>
      <Row className="mt-3">
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4 px-2">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button className="shop-btn">
                  ${product.price.toFixed(2)}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShopPage;

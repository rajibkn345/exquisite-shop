import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Glowing Skin",
      author: "Jane Doe",
      date: "May 1, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      title: "The Best Hair Care Products of 2023",
      author: "John Smith",
      date: "April 15, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 3,
      title: "5 Makeup Looks to Try This Spring",
      author: "Sarah Johnson",
      date: "April 1, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 4,
      title: "10 Tips for Glowing Skin",
      author: "Jane Doe",
      date: "May 1, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 5,
      title: "The Best Hair Care Products of 2023",
      author: "John Smith",
      date: "April 15, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 6,
      title: "5 Makeup Looks to Try This Spring",
      author: "Sarah Johnson",
      date: "April 1, 2023",
      image:
        "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  return (
    <Container>
      <h2 className="mt-4 text-center py-2">Beauty Blog</h2>
      <Row className="mt-3">
        {posts.map((post) => (
          <Col key={post.id} md={4} className="mb-4 px-2">
            <Card>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.author} | {post.date}
                </Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;

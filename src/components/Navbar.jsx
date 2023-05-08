import { Image } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function App() {
  return (
    <Navbar className="position-relative bg-custom-primary" expand="md">
      <Navbar.Brand className="px-4 position-absolute " href="/">
        <Image src={logo} alt="Logo" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="gap-3 fs-4">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Link to="/signup" className="btn-signup position-absolute">
          Sign Up Now
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;

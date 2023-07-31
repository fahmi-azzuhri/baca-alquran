import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg md" className="bg-navbar">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="d-flex align-items-center"
        >
          <img src={logo} alt="" className="w-logo cursor-pointer me-4" />
          <span className="name-logo">alquranQu</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

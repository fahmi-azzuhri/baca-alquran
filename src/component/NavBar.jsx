import React from "react";
import { Container, Nav, Navbar, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const NavBar = ({ handleSearchChange, searchQuery }) => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-navbar">
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

            <div className="d-flex border rounded-3 align-items-center">
              <FormControl
                className="border-0"
                type="search"
                placeholder="Search Surah"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button className="bg-transparent border-0 text-black">
                <CiSearch />
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

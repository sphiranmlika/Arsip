import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [showKebijakan, setShowKebijakan] = useState(false);

  return (
    <Navbar expand="lg" className="navbar py-3" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/logo-parepare.png"
            alt="Logo"
            width="35"
            height="50"
            className="me-2"
          />
          <div className="text-white lh-sm">
            <strong style={{ fontSize: "18px" }}>PEMERINTAH</strong><br />
            <small style={{ fontSize: "14px" }}>Kota Parepare</small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="tentang" className="nav-item">Tentang SPBE</NavLink>
            <NavLink to="/lhe" className="nav-item">LHE</NavLink>
            <NavLink to="/pengetahuan" className="nav-item">Pengetahuan SPBE</NavLink>
            <NavLink to="/lapor" className="nav-item">LAPOR!</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

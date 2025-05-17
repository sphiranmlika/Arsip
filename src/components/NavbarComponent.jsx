import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [showKebijakan, setShowKebijakan] = useState(false);

  return (
<Navbar expand="lg" className="navbar py-3" fixed="top">
  <Container className="d-flex align-items-center justify-content-between">
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
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="d-flex align-items-center gap-5">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Home</NavLink>
        <NavLink to="/tentang" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Tentang SPBE</NavLink>
        <NavLink to="/lhe" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>LHE</NavLink>
        <NavLink to="/pengetahuan" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Pengetahuan SPBE</NavLink>
        <NavLink to="/lapor" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>Informasi Indikator</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavbarComponent;

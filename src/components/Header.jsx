import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>My Rott</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/productos/instrumentos">Instrumentos</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/productos/pedales">Pedales</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/productos/amplificadores">Amplificadores</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";


export const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Rott</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Pipas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Tabacos Flake
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cuerda</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Cigarrillo
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

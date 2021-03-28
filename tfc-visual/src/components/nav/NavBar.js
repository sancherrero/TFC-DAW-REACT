import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar className="bg-primary" expand="lg">
          <Navbar.Brand href="#home" className="text-white">
            CoreComp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="text-white">
                Inicio
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Configurador
              </Nav.Link>
              <NavDropdown
                title="Componentes"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="#action/3.1">
                  Procesadores
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Tarjetas Gráficas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Placas Base
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Memorias RAM
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Discos Duros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fuentes de Alimentación
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cajas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Intel Core I5..."
                className="mr-sm-2"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;

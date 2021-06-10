import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "../Link";

class NavBar extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar className="bg-primary" expand="lg">
          <Navbar.Brand href="/" className="text-white">
            CoreComp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link href="/" className="text-white item">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/configurador" className="text-white item">
                  Configurador
                </Link>
              </Nav.Link>
              <NavDropdown
                title="Componentes"
                id="basic-nav-dropdown"

              >
                <NavDropdown.Item>
                  <Link href="/procesadores" className="item">
                    Procesadores
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/tarjetas_graficas" className="item">
                    Tarjetas Gráficas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/placas_base" className="item">
                    Placas Base
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/memorias_ram" className="item">
                    Memorias RAM
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/discos_duros" className="item">
                    Discos Duros
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/fuentes_alimentacion" className="item">
                    Fuentes de Alimentación
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/cajas" className="item">
                    Cajas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/refrigeracion" className="item">
                    Refrigeración
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/componentes" className="item">
                  Todo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;

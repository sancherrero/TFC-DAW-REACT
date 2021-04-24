import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../footer/Footer";

import CardColumns from "react-bootstrap/CardColumns";
import CardCategorias from "../ofertasDeck/CardCategorias";

import Spinner from "react-bootstrap/Spinner";
import { categoriasGenerador } from "../categorias/categoriasGenerador";

const Configurador = () => {

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <div>
            <h1>CONFIGURA TU EQUIPO A MEDIDA</h1>
            <hr/>
            <CardColumns>
          {categoriasGenerador !== null ? (
            categoriasGenerador.map((item) => (
              <Container key={item.nombre}>
                <Col>
                  <CardCategorias items={item} />
                </Col>
              </Container>
            ))
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
          )}
        </CardColumns>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default Configurador;

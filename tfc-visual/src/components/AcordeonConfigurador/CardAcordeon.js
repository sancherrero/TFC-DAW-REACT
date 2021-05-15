import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardAcordeon = (props) => {
  const categorias = [
    "Memoria RAM",
    "Tarjeta Gráfica",
    "Procesador",
    "Disco Duro ssd",
    "Disco Duro hdd",
    "Disco Duro m2",
  ];
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h2>Nuestra Configuración</h2>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Container>
            <Col md="auto" style={{ textAlign: "left" }}>
              <Row>
                <Col xs={12} md={6}>
                  <h3>Componentes: </h3>
                  {props.components
                    ? props.components.map((item) => {
                        return (
                          <a href="#" target="_blank">
                            <p key={item.id_componente}>{item.nombre}</p>
                          </a>
                        );
                      })
                    : null}
                  <p></p>
                </Col>
                <Col md={2} style={{ textAlign: "center" }}>
                  <h3>Precios: </h3>
                  {props.components
                    ? props.components.map((item) => {
                        return (
                          <p key={item.id_componente}>{item.precio_total} €</p>
                        );
                      })
                    : null}
                </Col>
                <Col md={4} style={{ textAlign: "right" }}>
                  <h3>Tienda: </h3>
                  {props.components
                    ? props.components.map((item) => {
                        return (
                          <p key={item.id_componente}>{item.proveedor} €</p>
                        );
                      })
                    : null}
                </Col>
              </Row>
            </Col>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

/**
 *  componente.map((item) => {
 *      <Col xs={12} md={8} style={{ textAlign: "left" }}>
            <h3>props.item.categoria</h3>
            <Row>
                <Col xs={12} md={8}>
                  <p>props.item.nombre</p>
                </Col>
                <Col xs={6} md={4}>
                  <p>props.item.precio €</p>
                </Col>
            </Row>
        </Col>
 * })
 * 
 * 
 */

export default CardAcordeon;

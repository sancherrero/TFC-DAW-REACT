import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardAcordeon = (props) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Nuestra configuración
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Container>
            <Col md={6} style={{ textAlign: "left" }}>
              <h3>PROCESADOR</h3>
              <Row>
                <Col xs={12} md={8}>
                  <p>{props.items}</p>
                </Col>
                <Col xs={6} md={4}>
                  <p>{props.items.procesador} €</p>
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

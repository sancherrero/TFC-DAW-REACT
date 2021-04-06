import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../footer/Footer";

const Configurador = () => {

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <div>
            <h1>CONFIGURADOR</h1>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default Configurador;

import React from "react";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../nav/NavBar";
import Carrusel from "../carousel/Carousel";

import CardDeck from "../ofertasDeck/CardDeck";
import Footer from "../footer/Footer";

class ContainerFluid extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavBar/>
            <Carrusel />
            <div className="section-ofertas">
              <h1>Novedades</h1>
              <hr></hr>
              <CardDeck />
              <CardDeck />
            </div>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContainerFluid;

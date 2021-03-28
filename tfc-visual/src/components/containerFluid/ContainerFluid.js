import React from "react";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../nav/NavBar";
import Carrusel from "../carousel/Carousel";
<<<<<<< HEAD
import CardComponent from "../card/CardComponent";
=======
import CardDeck from "../ofertasDeck/CardDeck";
>>>>>>> 1162fa999261f9334c7fe9a6d81591db64e4669f
import Footer from "../footer/Footer";
class ContainerFluid extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
            <Carrusel />
<<<<<<< HEAD
            <CardComponent />
=======
            <div className="section-ofertas">
              <h1>Novedades</h1>
              <hr></hr>
              <CardDeck />
              <CardDeck />
            </div>
>>>>>>> 1162fa999261f9334c7fe9a6d81591db64e4669f
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContainerFluid;

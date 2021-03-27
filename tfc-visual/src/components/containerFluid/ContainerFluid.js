import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../nav/NavBar";
import Carrusel from "../carousel/Carousel";
import CardComponent from "../card/CardComponent";
import Footer from "../footer/Footer";
class ContainerFluid extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
            <Carrusel />
            <CardComponent />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContainerFluid;

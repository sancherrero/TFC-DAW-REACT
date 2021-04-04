import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../nav/NavBar";
import Carrusel from "../carousel/Carousel";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "../ofertasDeck/Card";
import Footer from "../footer/Footer";

const ContainerFluid = () => {
  const [data, setData] = useState([]);

  //var cors = require("cors");

  useEffect(async () => {
    async function fetchData() {
      const result = await axios(
        "https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?oferta"
      );
      setData(result.data);
    }
    fetchData();
  }, []);

  const categorias = [
    {
      nombre: "Procesadores",
      img: "",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
          <Carrusel />
          <div className="section-ofertas">
            <h1>Novedades</h1>
            <CardColumns>
              {data.map((item) => (
                <Container>
                  <Col>
                    <Card items={item} />
                  </Col>
                </Container>
              ))}
            </CardColumns>
            <hr></hr>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerFluid;

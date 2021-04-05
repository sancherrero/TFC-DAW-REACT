import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carrusel from "../carousel/Carousel";
import CardColumns from "react-bootstrap/CardColumns";
//import CardDeck from "react-bootstrap/CardDeck";
import Card from "../ofertasDeck/Card";
import Footer from "../footer/Footer";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  const [data, setData] = useState([]);

  //var cors = require("cors");

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?oferta"
      );
      setData(result.data);
    }
    fetchData();
  }, []);

  /*const categorias = [
    {
      nombre: "Procesadores",
      img: "",
    },
  ];
*/
  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <Carrusel />
          <div className="section-ofertas">
            <h1>Novedades</h1>
            <CardColumns>
              {data !== null ? (
                data.map((item) => (
                  <Container key={item.id}>
                    <Col>
                      <Card items={item} />
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

export default Home;

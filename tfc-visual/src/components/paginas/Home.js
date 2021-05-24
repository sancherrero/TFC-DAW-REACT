import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Carrusel from "../carousel/Carousel";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "../ofertasDeck/Card";
import CardCategorias from "../ofertasDeck/CardCategorias";
import Footer from "../footer/Footer";
import Spinner from "react-bootstrap/Spinner";
import { categorias } from "../utils/categorias";

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

  var contador = 0;

  const categories = (item, cont) =>{
    const i = 
                <Col>
                  <CardCategorias items={item} />
                </Col>;
    if(cont === 3){
      contador = 0;
      return <Container key={item.nombre}>{i}</Container>;
    }
     return i;
    
      
  }

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100vh" }}>
      <Carrusel style={{ width: "100vh" }} />
      <div className="section-ofertas">
        <h1>Novedades</h1>
        <CardColumns>
          {data !== null ? (
            data.map((item) => (
              <Container key={item.id}>
                <Col className="col-sm-12">
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
      <div className="section-ofertas">
        <h1>Categorías</h1>
        <CardColumns>
          {categorias !== null ? (
            categorias.map((item) => (
              categories(item, contador++)
            ))
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Cargando...</span>
            </Spinner>
          )}
        </CardColumns>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;

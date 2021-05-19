import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../containerFluid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "../ofertasDeck/Card";
import Footer from "../footer/Footer";
import Spinner from "react-bootstrap/Spinner";

const ConstrucComponente = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipo=${props.componentType}`
        );
        setData(result.data);
      } catch (error) {
        setData(null);
        console.log(Object.keys(error), error.message);
      }
    }
    fetchData();
  }, [props.componentType]);

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <div className={props.title}>
            <h1>{props.title}</h1>
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

export default ConstrucComponente;

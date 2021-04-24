import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../footer/Footer";
import { useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardCategorias from "../ofertasDeck/CardCategorias";

import Spinner from "react-bootstrap/Spinner";
import { categoriasGenerador } from "../categorias/categoriasGenerador";

const Configurador = () => {
  const [configuration, setConfiguration] = useState({
    tipoUso: "",
    precio: "",
    forma: "",
    refrigeracion: "",
  });

  const handleClick = (event) => {
    if (!event) {
      return "";
    } else {
      if (event.currentTarget.className.includes("tipoUso")) {
        setConfiguration({
          ...configuration,
          tipoUso: event.currentTarget.attributes[2].nodeValue,
        });
      } else if (event.currentTarget.className.includes("precio")) {
        setConfiguration({
          ...configuration,
          precio: event.currentTarget.attributes[2].nodeValue,
        });
      } else if (event.currentTarget.className.includes("forma")) {
        setConfiguration({
          ...configuration,
          forma: event.currentTarget.attributes[2].nodeValue,
        });
      } else if (event.currentTarget.className.includes("refrigeracion")) {
        setConfiguration({
          ...configuration,
          refrigeracion: event.currentTarget.attributes[2].nodeValue,
        });
      }
    }
  };

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <div>
            <h1>CONFIGURA TU EQUIPO A MEDIDA</h1>
            <hr />
            <CardColumns>
              {categoriasGenerador !== null ? (
                categoriasGenerador.map((item) => (
                  <Container key={item.nombre}>
                    <Col>
                      <CardCategorias
                        parentCallback={handleClick}
                        items={item}
                      />
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
export default Configurador;

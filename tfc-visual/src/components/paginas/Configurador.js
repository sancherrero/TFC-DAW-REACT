import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../footer/Footer";
import { useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardCategorias from "../ofertasDeck/CardCategorias";
import TableConfigurador from "../TableConfigurador";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { categoriasGenerador } from "../utils/categoriasGenerador";
import { gaming } from "../utils/gaming";
import { multimedia } from "../utils/multimedia";
import { workstation } from "../utils/workstation";

const Configurador = () => {
  const [configuration, setConfiguration] = useState({
    tipoUso: "",
    precio: "",
    forma: "",
    refrigeracion: "",
  });

  const getConfiguration = () => {
    if (isComplete() !== false) {
      if(configuration.tipoUso === "gaming"){
        switch (configuration.precio) {
          case "economico":
            return gaming[0].barato[0];
          case "equilibrado":
            return gaming[0].equlibrado[0];
          case "top":
            return gaming[0].top[0];
          default:
            console.log("No ha funcionado");
        }
      }
    }
  };

  const isComplete = () => {
    for (const properties in configuration) {
      if (properties.lenght === 0) {
        return false;
      }
    }
  };

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

  function tableContent() {
    return <TableConfigurador properties={configuration} />;
  }

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100%vh" }}>
      <Row>
        <Col style={{ height: "100%" }}>
          <div>
            <h1>CONFIGURA TU EQUIPO A MEDIDA</h1>
            <hr />
            <CardColumns>
              {console.log(configuration)}
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
            <h1>EQUIPO SELECCIONADO</h1>
            <hr />
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Tipo de uso</th>
                  <th>Rango de precio</th>
                  <th>Tamaño</th>
                  <th>Tipo de refrigeración</th>
                </tr>
              </thead>
              <tbody>{tableContent()}</tbody>
              {console.log(getConfiguration())}
            </Table>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default Configurador;

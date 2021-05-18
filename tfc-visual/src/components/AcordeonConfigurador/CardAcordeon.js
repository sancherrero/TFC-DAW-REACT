import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardAcordeon = (props) => {
  const categorias =
  {
    memoria_ram: "Memoria RAM",
    tarjeta_grafica: "Tarjeta Gráfica",
    procesador: "Procesador",
    placa_base: "Placa Base",
    disco_duro: "Disco Duro",
    fuente_alimentacion: "Fuente de alimentación",
    caja: "Caja",
    refrigeracion_liquida: "Refrigeración Líquida",
    refrigeracion_aire: "Refrigeración de Aire"
  };

  var contadorComponetes = 0;
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h2>Nuestra Configuración</h2>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Container>
            <Col md="auto" style={{ textAlign: "left" }}>
              <Row>
                <Col xs={12} md={6}>
                  <h3>Componentes: </h3>
                  {props.components
                    ? props.components.map((item) => {
                      contadorComponetes = item.tipo_componente === 'disco_duro' ? 1 + contadorComponetes : contadorComponetes;
                      return (
                        <div>
                          <h5>{categorias[item.tipo_componente]} {item.tipo_componente === 'disco_duro' ? `${item.tipo_disco} ${contadorComponetes}` : null}</h5>
                          <p key={item.id_componente}><a href={item.url_articulo} target="_blank" rel="noreferrer">{item.nombre}</a></p>
                        </div>
                      );
                    })
                    : null}
                  <p></p>
                </Col>
                <Col md={2} style={{ textAlign: "center" }}>
                  <h3>Precios: </h3>
                  {props.components
                    ? props.components.map((item) => {
                      return (
                        <p key={item.id_componente}>{item.precio_total} €</p>
                      );
                    })
                    : null}
                </Col>
                <Col md={4} style={{ textAlign: "right" }}>
                  <h3>Tienda: </h3>
                  {props.components
                    ? props.components.map((item) => {
                      return (
                        <p key={item.id_componente}>{item.proveedor}</p>
                      );
                    })
                    : null}
                </Col>
              </Row>
            </Col>
          </Container>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

/**
 *  componente.map((item) => {
 *      <Col xs={12} md={8} style={{ textAlign: "left" }}>
            <h3>props.item.categoria</h3>
            <Row>
                <Col xs={12} md={8}>
                  <p>props.item.nombre</p>
                </Col>
                <Col xs={6} md={4}>
                  <p>props.item.precio €</p>
                </Col>
            </Row>
        </Col>
 * })
 * 
 * 
 */

export default CardAcordeon;

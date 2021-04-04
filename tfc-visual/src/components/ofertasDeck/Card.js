import React from "react";
import Card from "react-bootstrap/Card";

const OfertasDeck = (props) => {
  return (
    <Card style={{ height: "55vh", marginTop: "10%" }}>
      <Card.Img
        variant="top"
        src={props.items.url_imagen}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "200px",
          maxHeight: "200px",
          margin: "auto",
          display: "block",
        }}
      />
      <Card.Body>
        <Card.Title>{props.items.nombre}</Card.Title>
        <Card.Text>Proveedor: {props.items.proveedor}</Card.Text>
        <Card.Text>Precio: {props.items.precio_minimo}€</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={props.items.url_articulo}>Ir al sitio</a>
      </Card.Footer>
    </Card>
  );
};

export default OfertasDeck;

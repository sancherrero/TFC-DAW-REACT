import React from "react";
import Card from "react-bootstrap/Card";
import {
  stylesCardOfertasDeckImg,
  stylesCardOfertasDeck,
} from "../../css/cardCss";
const OfertasDeck = (props) => {
  return (
    <Card style={stylesCardOfertasDeck}>
      <Card.Img
        variant="top"
        src={props.items.url_imagen}
        style={stylesCardOfertasDeckImg}
      />
      <Card.Body>
        <Card.Title>{props.items.nombre}</Card.Title>
        <Card.Text>Proveedor: {props.items.proveedor}</Card.Text>
        <Card.Text>
          Precio: {props.items.precio_total | props.items.precio_minimo}€
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={props.items.url_articulo}>Ir al sitio</a>
      </Card.Footer>
    </Card>
  );
};

export default OfertasDeck;

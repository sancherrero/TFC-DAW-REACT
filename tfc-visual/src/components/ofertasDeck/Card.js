import React from "react";
import Card from "react-bootstrap/Card";
import Route from "./../Route";
import Link from "./../Link";
import Componente from "./../paginas/Componente";

const OfertasDeck = (props) => {
  return (
    <Card
      style={{
        height: "600px",
        marginTop: "10%",
      }}
    >
      <Card.Img
        variant="top"
        src={props.items.url_imagen}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "300px",
          maxHeight: "300px",
          margin: "auto",
          display: "block",
        }}
      />
      <Card.Body>
        <Card.Title>{props.items.nombre}</Card.Title>
        <Card.Text>Proveedor: {props.items.proveedor}</Card.Text>
        <Card.Text>
          Precio: {props.items.precio_minimo | props.items.precio_total}€
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.items.url_articulo !== undefined ? (
          <a href={props.items.url_articulo}>Ir al sitio</a>
        ) : (
          <Link
            href={"/componente/" + props.items.id}
            className="text-blue item"
          >
            Ver mas
          </Link>
        )}
      </Card.Footer>
      <Route path={"/componente/" + props.items.id}>
        <Componente />
      </Route>
    </Card>
  );
};

export default OfertasDeck;

import React from "react";
import Card from "react-bootstrap/Card";
import Link from "../Link";
import Nav from "react-bootstrap/Nav";

const CardCategorias = (props) => {
  return (
    <Card style={{ width: "100%", height: "50%", marginTop: "10%" }}>
      <Card.Img
        variant="top"
        src={props.items.img}
        style={{
          width: "100%",
          height: "200px",
        }}
        onClick={props.parentCallback}
        className={props.items.className}
        value={props.items.value}
      />
      <Card.Body>
        <Card.Title>{props.items.nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardCategorias;

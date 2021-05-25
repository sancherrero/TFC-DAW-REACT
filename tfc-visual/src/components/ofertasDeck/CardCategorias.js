import React from "react";
import Card from "react-bootstrap/Card";

const CardCategorias = (props) => {
  return (
    <Card
      style={{
        width: "70%",
        height: "50%",
        marginTop: "15%",
        marginLeft: "15%",
        borderRadius: "20%",
      }}
    >
      <a href={props.items.route}>
        <Card.Img
          variant="top"
          src={props.items.img}
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "20%",
          }}
          onClick={props.parentCallback}
          className={props.items.className}
          value={props.items.value}
        />
      </a>
      <Card.Body>
        <Card.Title
          style={{
            textAlign: "center",
          }}
        >
          {props.items.nombre}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardCategorias;

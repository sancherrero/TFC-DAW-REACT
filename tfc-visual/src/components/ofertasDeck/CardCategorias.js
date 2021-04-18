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
      />
      <Card.Body>
        <Nav.Link>
          <Link href={props.items.route} className="text-black item">
            <Card.Title>{props.items.nombre}</Card.Title>
          </Link>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default CardCategorias;

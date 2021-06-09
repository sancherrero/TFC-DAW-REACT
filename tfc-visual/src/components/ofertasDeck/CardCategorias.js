import React from "react";
import Card from "react-bootstrap/Card";
import {
  stylesCardCategorias,
  stylesCardCategoriasImg,
  stylesCardCategoriasTitle,
} from "../../css/cardCss";


const CardCategorias = (props) => {

  //, {useState}
  // const [isActive, setActive] = useState("false");

  // const handleToggle = () => {
  //    setActive(!isActive);
  //  }

  // //handleToggle()
  //style={isActive ? {backgroundColor: 'blue'} : null}
  
  return (
    <Card style={stylesCardCategorias}>
      <a href={props.items.route}>
        <Card.Img
          variant="top"
          src={props.items.img}
          style={stylesCardCategoriasImg}
          onClick={function(event){ props.parentCallback(event);  }}
          className={props.items.className}
          value={props.items.value}
        />
      </a>
      <Card.Body>
        <Card.Title  style={stylesCardCategoriasTitle}>
          {props.items.nombre}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardCategorias;

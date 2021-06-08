import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CardAcordeon from "./CardAcordeon";

const Acordeon = (props) => {
  //const configuraciones = props.items;
  return (
    <Accordion defaultActiveKey="0" style={{marginTop: '5%'}}> 
      <CardAcordeon components={props.items} />
    </Accordion>
  );
};

export default Acordeon;

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CardAcordeon from "./CardAcordeon";

const Acordeon = (props) => {
  //const configuraciones = props.items;
  return (
    <Accordion defaultActiveKey="0">
      <CardAcordeon />
    </Accordion>
  );
};

export default Acordeon;
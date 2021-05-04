import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const TableConfigurador = (props) => {
  return (
    <ListGroup
      horizontal="md"
      className="my-2"
      key="md"
      style={{ textAlign: "center" }}
    >
      <ListGroup.Item>
        <h3>
          Tipo de uso:
          <br />
          <Badge variant="primary">
            {capitalize(props.properties.tipoUso)}
          </Badge>
        </h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>
          Rango de precio:
          <br />
          <Badge variant="primary">{capitalize(props.properties.precio)}</Badge>
        </h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>
          Tamaño:
          <br />
          <Badge variant="primary">{capitalize(props.properties.forma)}</Badge>
        </h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>
          Tipo de refrigeración:
          <br />
          <Badge variant="primary">
            {capitalize(props.properties.refrigeracion)}
          </Badge>
        </h3>
      </ListGroup.Item>
    </ListGroup>
  );
};
/*
<tr>
      <td>{capitalize(props.properties.tipoUso)}</td>
      <td>{capitalize(props.properties.precio)}</td>
      <td>{capitalize(props.properties.forma)}</td>
      <td>{capitalize(props.properties.refrigeracion)}</td>
    </tr>*/

export default TableConfigurador;

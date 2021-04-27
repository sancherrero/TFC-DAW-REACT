import React from "react";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const TableConfigurador = (props) => {
  return (
    <tr>
      <td>{capitalize(props.properties.tipoUso)}</td>
      <td>{capitalize(props.properties.precio)}</td>
      <td>{capitalize(props.properties.forma)}</td>
      <td>{capitalize(props.properties.refrigeracion)}</td>
    </tr>
  );
};

export default TableConfigurador;

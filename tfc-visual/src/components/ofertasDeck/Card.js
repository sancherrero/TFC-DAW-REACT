import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Route from "./../Route";
import Accordion from "react-bootstrap/Accordion";
import Componente from "./../paginas/Componente";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

const OfertasDeck = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${props.items.nombre}`
        );
        setData(result.data);
      } catch (error) {
        setData(null);
        console.log(Object.keys(error), error.message);
      }
    }
    fetchData();
  }, [props.items.nombre]);

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
          width: "100%",
          height: "300px",
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
          Precio: {props.items.precio_articulo | props.items.precio_minimo}€
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.items.url_articulo !== undefined ? (
          <a href={props.items.url_articulo}>Ir al sitio</a>
        ) : (
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Ver más
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <th>Proveedor</th>
                      <th>Precio</th>
                    </thead>
                    <tbody>
                      {data !== null ? (
                        data.map((item) => (
                          <tr>
                            <td>
                              <a href={item.url_articulo}>{item.proveedor}</a>
                            </td>
                            <td>{item.precio_total} €</td>
                          </tr>
                        ))
                      ) : (
                        <Spinner animation="border" role="status">
                          <span className="sr-only">Cargando...</span>
                        </Spinner>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        )}
      </Card.Footer>
      <Route path={"/componente/" + props.items.id}>
        <Componente />
      </Route>
    </Card>
  );
};

export default OfertasDeck;

import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
const Descripcion = () => {
  return (
    <>
      <h6 style={{ textAlign: "center" }}>
        Este configurador se basa en tres pilares básicos para nuestro equipo (
        Tipo de uso, Rango de precio y Refrigeración ). El primero de ellos,
        Tipo de uso hace referencia al desempeño que nuestro equipo requiere.
      </h6>
      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Equipo "Gaming"</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Potente </Card.Subtitle>
            <Card.Text>
              Se considera un equipo potente que pueda mover los videojuegos
              actuales con gran solvencia. Se diferencian de los ordenadores
              convencionales por el uso de tarjetas gráficas y procesadores de
              alto rendimiento.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Equipo "Multimedia"</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Todoterreno
            </Card.Subtitle>
            <Card.Text>
              Aquel que requiere un equilibrio perfecto para desempeñar todo
              tipo de labores, desde las más básicas como la ofimatica o la
              navegación por internet hasta las más avanzadas como la
              visualización o edición de vídeo.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Equipo "Workstation"</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Trabajo</Card.Subtitle>
            <Card.Text>
              Aquel destinado al trabajo más exigente con aplicaciones de álta
              gama como diseño gráfico, edición de vídeo, diseño 3D programas de
              diseño industriales e ingeniería los cuales necesitan de una gran
              capacidad computacional y gráfica.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
};

export default Descripcion;

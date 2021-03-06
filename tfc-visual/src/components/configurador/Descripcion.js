import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import descriptImage from '../../images/fondoConfigurador.jpg'
const Descripcion = () => {
  return (
    <div style={{backgroundImage:'url('+descriptImage+')',backgroundSize:'cover', padding:'3%', height:'30%'}}>
      <h6 style={{ textAlign: "center", color: '#fff', padding: '3%', width:'80%', margin: '10px auto'}}>
        Este configurador se basa en tres pilares básicos para nuestro equipo (
        Tipo de uso, Rango de precio y Refrigeración ). El primero de ellos,
        Tipo de uso hace referencia al desempeño que nuestro equipo requiere.
      </h6>
      <CardColumns style={{ margin: "20px", textAlign: "center" }}>
        <Card border="light" style={{ width: "18rem", borderRadius: '10%' }}>
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
        <Card border="light" style={{ width: "18rem", borderRadius: '10%' }}>
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
        <Card border="light" style={{ width: "18rem", borderRadius: '10%' }}>
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
    </div>
  );
};

export default Descripcion;

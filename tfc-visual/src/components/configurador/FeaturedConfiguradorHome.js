import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "../Link";
const stylesCard = {
  margin: "13vh",
  background: 'none',
  color: '#fff',
  border: 'none'
};

const FeaturedConfigurador = () => {
  return (
    <Card style={stylesCard} className="text-center">
      <Card.Header>New Feature</Card.Header>
      <Card.Body>
        <Card.Title>Configurador automático de CoreComp</Card.Title>
        <Card.Text>
          ¿Estás planeando montar tu propio ordenador? ¿Sabes para qué lo
          quieres pero no sabes por dónde comenzar? No te preocupes, hemos
          creado un superconfigurador para encontrar el equipo que necesitas,
          sin preocuparte por el rendimiento y lo mejor: con los precios más
          baratos en los mejores componentes del mercado. ¿Quieres verlo?
        </Card.Text>
        <Link href="/configurador" className="item" style={{color: '#fff'}}>
        <Button variant="primary" >
          
            ¡Vamos!
          
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FeaturedConfigurador;

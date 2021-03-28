import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Footer extends React.Component {
  render() {
    return (
      <Card className="text-center bg-dark">
        <Card.Header className="text-white">About us</Card.Header>
        <Card.Body>
          <Card.Title className="text-white">CoreComp</Card.Title>
          <hr></hr>
          <Card.Subtitle className="text-white">Diseñadores web</Card.Subtitle>
          <hr></hr>
          <Card.Text className="text-white">
            Santiago Naranjo
            <br></br>
            Kevin Lencina
            <br></br>
            Francisco Sanchis
          </Card.Text>
          <Button variant="primary" className="text-white">
            RRSS
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  }
}

export default Footer;

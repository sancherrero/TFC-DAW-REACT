import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../footer/Footer";
import { useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import CardCategorias from "../ofertasDeck/CardCategorias";
import TableConfigurador from "../tableConfigurador/TableConfigurador";
import Spinner from "react-bootstrap/Spinner";
import { categoriasGenerador } from "../utils/categoriasGenerador";
import { gaming } from "../utils/gaming";
import { multimedia } from "../utils/multimedia";
import { workstation } from "../utils/workstation";
import Button from "react-bootstrap/Button";
import Acordeon from "../AcordeonConfigurador/Acordeon";
import axios from "axios";

const Configurador = () => {
  var elements = [];
  const [configuration, setConfiguration] = useState({
    tipoUso: "",
    precio: "",
    forma: "",
    refrigeracion: "",
  });

  //gastarlo en el acordeon que se le muestra al usuario
  const [data, setData] = useState([
    {
      ram: "",
      gpu: "",
      procesador: "",
      discos: [{ ssd: "", m2: "", hdd: "" }],
      fuente: "",
      placa: "",
      caja: "",
    },
  ]);

  const fetchData = async (param) => {
    try {
      //https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=memoria_ram&min=16&max=128
      //https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=memoria_ram&min=16
      const ramResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=ram&min=${param.ram}`
      );
      const gpuResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=gpu&min=${param.gpu[0]}`
      );
      const procesadorResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=procesador&min=${param.procesador}`
      );
      const discoSsdResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=discos&tipoDisco=ssd&min=${param.discos[0].ssd}`
      );
      const discoM2Result = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=discos&tipoDisco=m2&min=${param.discos[0].m2}`
      );
      const discoHddResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=discos&tipoDisco=hdd&min=${param.discos[0].hdd}`
      );
      const fuenteResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=fuente&min=${param.fuente[0]}`
      );
      const placaResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=placa&min=${procesadorResult.data[0].socket}`
      );
      const cajaResult = await axios(
        `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?tipoGenerador=caja&min=${placaResult.data[0].factor_forma}`
      );
      setData({
        ram: ramResult.data,
        gpu: gpuResult.data,
        procesador: procesadorResult.data,
        discos: {
          ssd: discoSsdResult.data,
          m2: discoM2Result.data,
          hdd: discoHddResult.data,
        },
        fuente: fuenteResult.data,
        placa: placaResult.data,
        caja: cajaResult.data,
      });
      console.log(`Data de fetchdata: ${data}`);
    } catch (error) {
      //setData(null);
      console.log(Object.keys(error), error.message);
    }
  };

  const getConfiguration = () => {
    if (isComplete() !== false) {
      if (configuration.tipoUso === "gaming") {
        return getTipoPrice(configuration.precio, gaming[0]);
      } else if (configuration.tipoUso === "multimedia") {
        return getTipoPrice(configuration.precio, multimedia[0]);
      } else if (configuration.tipoUso === "workstation") {
        return getTipoPrice(configuration.precio, workstation[0]);
      }
    }
  };

  const getTipoPrice = (configurationType, configuration) => {
    switch (configurationType) {
      case "economico":
        let result = fetchData(configuration.barato[0]);
        return result;
      case "equilibrado":
        return configuration.equilibrado[0];
      case "top":
        return configuration.top[0];
      default:
        return "No ha funcionado";
    }
  };

  const isComplete = () => {
    for (const properties in configuration) {
      if (properties.lenght === 0) {
        return false;
      }
    }
  };

  //ESTE MÉTODO INTENTA COMPROBAR QUE LAS PROPERTIES DE data no estén vacías
  const objectFilled = () => {
    for (const properties in data) {
      if (properties.length === 0) {
        return false;
      }
    }
    return true;
  };

  const handleClick = (event) => {
    if (!event) {
      return "";
    } else {
      if (event.currentTarget.className.includes("tipoUso")) {
        setConfiguration({
          ...configuration,
          tipoUso: event.currentTarget.attributes["value"].nodeValue,
        });
      } else if (event.currentTarget.className.includes("precio")) {
        setConfiguration({
          ...configuration,
          precio: event.currentTarget.attributes["value"].nodeValue,
        });
      } else if (event.currentTarget.className.includes("forma")) {
        setConfiguration({
          ...configuration,
          forma: event.currentTarget.attributes["value"].nodeValue,
        });
      } else if (event.currentTarget.className.includes("refrigeracion")) {
        setConfiguration({
          ...configuration,
          refrigeracion: event.currentTarget.attributes["value"].nodeValue,
        });
      }
    }
  };

  const objetos = objectFilled() ? "<div>si</div>" : "";

  const printObject = () => {
    Object.keys(data).forEach((item) => {
      if (item !== "discos") {
        if (data[item][0] !== undefined) {
          elements.push(data[item][0]);
          //console.log(data[item][0].nombre);
        }
      } else {
        Object.keys(data[item]).forEach((it) => {
          if (data[item][it][0] !== undefined) {
            if (data[item][it][0].nombre !== undefined) {
              elements.push(data[item][it][0]);
              //console.log(data[item][it][0]);
            }
          }
        });
      }
    });
    return elements;
    /*
    Object.values(data).forEach((item) => {
      Object.values(item).forEach((prop) => {});
    });*/
  };

  return (
    <Container fluid style={{ height: "100vh", minHeight: "100vh" }}>
      <Row style={{ margin: "15vh 5vw" }}>
        <Col style={{ height: "100%" }}>
          <div>
            <h1 style={{ marginBottom: "5%" }}>CONFIGURA TU EQUIPO A MEDIDA</h1>
            <hr />

            <CardColumns>
              {console.log(configuration)}
              {categoriasGenerador !== null ? (
                categoriasGenerador.map((item) => (
                  <Container key={item.nombre}>
                    <Col>
                      <CardCategorias
                        parentCallback={handleClick}
                        items={item}
                      />
                    </Col>
                  </Container>
                ))
              ) : (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Cargando...</span>
                </Spinner>
              )}
            </CardColumns>
            <h1 style={{ margin: "5% 0%" }}>EQUIPO SELECCIONADO</h1>
            <hr />
            <div
              className="mb-2"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TableConfigurador properties={configuration} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: "100%" }}>
          <div
            className="mb-2"
            style={{
              textAlign: "center",
            }}
          >
            <Button
              variant="primary"
              size="lg"
              style={{
                margin: "10px 0px",
              }}
              onClick={() => getConfiguration()}
            >
              Generar Configuración
            </Button>
            <Acordeon items={printObject()} />
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default Configurador;

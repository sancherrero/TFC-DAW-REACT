import React from "react";
import Carousel from "react-bootstrap/Carousel";


/*
 * Carrusel
 * Las imagenes se insertan desde public/img/ejemplo.jpg
 */
const style = {maxHeight: "700px"};
class Carrousel extends React.Component {
  
  render() {
    return (
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img className="d-block" 
              src="./img/Banner_1.png?text=First"
              alt="First slide" 
              style={style}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="./img/Banner_2.png?text=Second"
              alt="Second slide"
              style={style}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="./img/Banner_3.png?text=Third"
              alt="Third slide"
              style={style}
            />
          </Carousel.Item>
        </Carousel>
    
    );
  }
}

export default Carrousel;

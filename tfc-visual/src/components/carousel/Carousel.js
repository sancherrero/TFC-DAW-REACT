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
              src="./img/Wallpaper_3.png?text=First"
              alt="First slide" 
              style={style}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="./img/Wallpaper_3.png?text=Second"
              alt="Second slide"
              style={style}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="./img/Wallpaper_3.png?text=Third"
              alt="Third slide"
              style={style}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
    );
  }
}

export default Carrousel;

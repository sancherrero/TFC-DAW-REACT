import React from "react";
import Carousel from "react-bootstrap/Carousel";


/*
 * Carrusel
 * Las imagenes se insertan desde public/img/ejemplo.jpg
 */
class Carrousel extends React.Component {
  render() {
    return (
        <Carousel className="h-25 d-flex justify-content-center" >
          <Carousel.Item>
            <img className="d-block w-100"
              src="./img/wallpaper_1.jpg?text=First slide&bg=373940"
              alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/Wallpaper_2.png?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/Wallpaper_3.jpg?text=Third slide&bg=20232a"
              alt="Third slide"
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

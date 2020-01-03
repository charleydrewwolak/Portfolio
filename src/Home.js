import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`./Banner1.jpeg`)}
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`./Banner2.jpeg`)}
              alt="First slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`./Banner3.jpeg`)}
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`./Banner4.gif`)}
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;

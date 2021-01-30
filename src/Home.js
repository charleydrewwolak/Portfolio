import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Home.css'

class Home extends Component {

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + '200px';
  }

  render() {
    return (
      <div className="Home">
        <Carousel>
          <Carousel.Item>
            <iframe src="https://drive.google.com/file/d/1zsCyGJK0pJfeEIMYgMpGPv0kKE-tXksP/preview" onload="resizeIframe(this)"></iframe>
          </Carousel.Item>
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

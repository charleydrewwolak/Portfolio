import React, { Component } from "react";
import "./Gallery.css";
import Carousel from "react-bootstrap/Carousel";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      Fabrication: [
        {
          title: "Vascular",
          files: ["Vascular1.jpg", "Vascular2.jpg", "Vascular3.jpg"],
          materials: "Steel",
          year: "2019",
          shows: "Strange Company, Penald NC",
          info:
            "To be human is to make. Craft was once an essential skill for survival. Humans evolved by being creative and resourceful. We deskill ourselves as we continue to grow into post-industrial society, leaving behind our traditions and our very nature. Today we exist beyond what we’ve known to be natural. We now possess technologies that can rewrite our very own DNA. Vascular​ is a part of a series that will question what it means to exist in a post-human world. Technology is a part of us, woven into the fabric of our society. I will use Arduino controlled sensors and lighting combined with wearable sculpture to create a series that dynamically responds with the body. This piece is half done. The steal vein structure engulfs and explodes from the body. Red glowing EL wire will follow the structure, pulsing to the wearer’s heart rate. The explosive vein nature expresses how our relationship with technology can be both symbiotic and parasitic."
        },
        {
          title: "Ajna Broach",
          files: ["AjnaBroach1.jpeg", "AjnaBroach2.jpg"],
          materials: "Steal, Silver",
          shows: "Strange Company, Penald NC",
          year: "2019",
          info: ""
        },
        {
          title: "Ajna",
          files: ["Ajna1.jpeg", "Ajna2.jpeg"],
          materials: "Steal",
          shows: "Strange Company, Penald NC",
          year: "2019",
          info: ""
        },
        {
          title: "Gay Wattering Can",
          files: ["GayWatteringcan1.jpeg"],
          materials: "Steal, Spraypaint, Glitter",
          year: "2019",
          shows: "Strange Company, Penald NC",
          info: ""
        },
        {
          title: "Metrosexual Vase",
          files: ["MetrosexualVase1.jpeg", "MetrosexualVase2.jpeg"],
          materials: "Steal, Spraypaint, Glitter",
          year: "2019",
          shows: "Strange Company, Penald NC",
          info: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="Gal">
        <div className="navs">
          <button>Fabrication</button>
          <br/>
          <button>Graphic Design</button>
          <br/>
          <button>Photography</button>
          <br/>
          <button>CAD</button>
          <br/>
        </div>
        
        <div className="gallery">
        <h2>Gallery</h2>
          {this.state.Fabrication.map(m => (
            <div className="entry">
              <Carousel>
                {m.files.map(i => (
                  <Carousel.Item>
                    <img src={require(`./work/Fabrication/${i}`)} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <br />
              <strong>{m.title}</strong>
              <br />
              <i>{m.materials}</i>
              <p>
                {m.year}
                <br /> {m.shows}
              </p>

              <br />
              <p>{m.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;

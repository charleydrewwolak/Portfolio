import React, { Component } from "react";
import "./Gallery.css";
import Carousel from "react-bootstrap/Carousel";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      page: "Fabrication",
      Fabrication: [
        {
          title: "Vascular",
          files: ["Vascular1.jpg", "Vascular3.jpg", "Vascular5.jpg"],
          materials: "Steel",
          year: "2019",
          shows: "Strange Company, Penland NC",
          info:
            "To be human is to make. Craft was once an essential skill for survival. Humans evolved by being creative and resourceful. We deskill ourselves as we continue to grow into post-industrial society, leaving behind our traditions and our very nature. Today we exist beyond what we’ve known to be natural. We now possess technologies that can rewrite our very own DNA. Vascular​ is a part of a series that will question what it means to exist in a post-human world. Technology is a part of us, woven into the fabric of our society. I will use Arduino controlled sensors and lighting combined with wearable sculpture to create a series that dynamically responds with the body. This piece is half done. The steel vein structure engulfs and explodes from the body. Red glowing EL wire will follow the structure, pulsing to the wearer’s heart rate. The explosive vein nature expresses how our relationship with technology can be both symbiotic and parasitic."
        },
        {
          title: "Ajna Broach",
          files: ["AjnaBroach1.jpg", "AjnaBroach2.jpg"],
          materials: "Steel, Silver",
          shows: "Strange Company, Penland NC",
          year: "2019",
          info: ""
        },
        {
          title: "Ajna",
          files: ["Ajna1.jpg", "Ajna2.jpg"],
          materials: "Steel",
          shows: "Strange Company, Penland NC",
          year: "2019",
          info: ""
        },
        {
          title: "Gay Wattering Can",
          files: ["GayWatteringcan1.jpg"],
          materials: "Steel, Spraypaint, Glitter",
          year: "2019",
          shows: "Strange Company, Penland NC",
          info: ""
        },
        {
          title: "Metrosexual Vase",
          files: ["MetrosexualVase1.jpg", "MetrosexualVase2.jpg"],
          materials: "Steel, Spraypaint",
          year: "2019",
          shows: "Strange Company, Penland NC",
          info: ""
        },
        {
          title: "Inner Light",
          files: ["Light1.jpg", "Light2.jpg"],
          materials: "Silver, Enamel, Steel",
          year: "2019",
          shows: "",
          info: "Sgraffito and Plique-à-Jour enameling techniques were used to make this broach inspired by Waldorf gnome lore - specifically a story of Puck the Gnome. Holding the broach up to the light reveals the glowing crystal that guided Puck on his journey through the depths of the earth. The broach is to be worn on the heart as a reminder to let your inner light guide you in your journey through life."
        },
        {
          title: "Caverns",
          files: ["Caverns.jpg"],
          materials: "Silver, Copper, Enamel",
          year: "2019",
          shows: "",
          info: "Sgraffito enameling techniques were used to make this necklace to correspond to the Inner Light Broach. When worn, the cavers open at the heart. This piece reflects the journey through darkness to reach the clarity that comes with being true to your heart."
        },
        {
          title: "In Our Hands",
          files: ["InOurHands.jpg"],
          materials: "Copper, Powder Coat, PLA, Spray Paint, Wood",
          year: "2018",
          shows: "",
          info: ""
        },
        {
          title: "Flux",
          files: ["Flux.jpg", "Flux1.jpg", "Flux2.jpg"],
          materials: "Copper, Enamel, PLA, Spray Paint, Rope",
          year: "2018",
          shows: "KMAC Couture",
          info: "Designed shoulder piece in collaboration with Brent Drew-Wolak’s Dress. Two 3D printed hollow vessels on each shoulder store indigo dye. On the runway, dye was released into dress."
        },
        {
          title: "Life of the Mountains",
          files: ["Banjo.gif", "Banjo1.jpg", "Banjo2.jpg"],
          materials: "Copper, Enamel, Acrylic, Wood",
          year: "2017",
          shows: "",
          info: "My intent with this piece was symbolize how music can serve as a window. Appalachian music brings a community together to dance, sing, and celebrate life. It also expresses and preserves a history of hardship, exploitation, resistance, and resilience. On one side of Pine Mountain you see breath taking views of rolling green mountains as you drive down winding roads to Cowan Creek. Drive down the opposite direction and you see a void of dirt and destruction: nature strip mined away, layer by layer."
        },

      ],
      GraphicDesign: [
        {
          title: "Dance Alloy: Time and Tide", 
          files: ["Alloy1.png", "Alloy2.png"],
          materials: "Photoshop",
          year: "2018",
          shows: "",
          info: "Winner of poster contest."
        },
        {
          title: "Squirrel Hacks", 
          files: ["SquirrelHacks.png","SquirrelHacks1.png"],
          materials: "Rhino, Illustrator",
          year: "2018",
          shows: "",
          info: "Logo and poster for Squirrel Hacks Hackathon at Earlham College"
        },
        {
          title: "Scarab Button", 
          files: ["ScarabButton.png"],
          materials: "Photoshop",
          year: "2018",
          shows: "",
          info: "Button design for the Egypt Breakout at the Joseph Moore Museum"
        },
        {
          title: "Darwin Day Poster", 
          files: ["Charles-Darwin.jpg"],
          materials: "Illustrator",
          year: "2018",
          shows: "",
          info: "Poster for Darwin Day event at the Joseph Moore Museum"
        },
        {
          title: "Hayes Arboretum Ad", 
          files: ["Hayes.png"],
          materials: "Pixlemator",
          year: "2017",
          shows: "",
          info: ""
        },
      ],
      CAD: [
        {
          title: "Stairwell",
          files: ["Stairwell1.jpg", "Stairwell2.jpg", "Stairwell3.jpg"],
          materials: "Rhino",
          year: "2019",
          shows: "",
          info: "Designed and fabricated in collaboration with William Clay and Dani"
        },
        {
          title: "Louisville Bowl",
          files: ["RhinoBowl.jpg"],
          materials: "Rhino",
          year: "2016",
          shows: "",
          info: "Inspired by the Mercer building's architecture.  "
        },
        {
          title: "Planets",
          files: ["Planets.jpg"],
          materials: "Rhino",
          year: "2016",
          shows: "",
          info: ""
        },
        {
          title: "Chair",
          files: ["Chair2.jpg", "Chair1.jpg"],
          materials: "Rhino",
          year: "2016",
          shows: "",
          info: ""
        },
      ],
      Photography: [
        {
          title: "Self Portrait 1",
          files: ["Self3.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "Self Portrait 2",
          files: ["Self2.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "Self Portrait 3",
          files: ["Self4.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: ""
        },
        {
          title: "",
          files: ["O1.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "",
          files: ["O2.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "",
          files: ["O3.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "",
          files: ["O5.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
        {
          title: "",
          files: ["O6.jpeg"],
          materials: "Scanned Print",
          year: "2018",
          shows: "",
          info: "8x10"
        },
      ],
    };
  }

  changePage = (p) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    document.getElementById(this.state.page).classList.remove("highlight")
    let page = this.page
    page = p
    document.getElementById(page).classList.add("highlight")
    this.setState({ page })
    
  }
  

  render() {
    return (
      <div className="Gal">
        <div className="navs">
          <button id="Fabrication" onClick={() => this.changePage("Fabrication")}>Fabrication</button>
          
          <button id="Photography" onClick={() => this.changePage("Photography")}>Photography</button>

          <button id="GraphicDesign" onClick={() => this.changePage("GraphicDesign")}>Graphic Design</button>
          
          <button id="CAD" onClick={() => this.changePage("CAD")}>CAD</button>
          
        </div>
        
        <div className="gallery">
        <h2>Gallery</h2>
          {this.state[this.state.page].map(m => (
            <div className="entry">
              <Carousel>
                {m.files.map(i => (
                  <Carousel.Item>
                    <img src={require(`./work/${this.state.page}/${i}`)} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <br />
              <strong>{m.title}</strong>
              <br />
              {m.materials ? (<i>{m.materials}</i>) : (null)}
              {m.year ? (<p>{m.year}</p>) : null}
              {m.shows ? (<p>{m.shows}</p>) : null}
              {m.info ? (<p>{m.info}</p>): null}
              <br/><br/><br/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery; 
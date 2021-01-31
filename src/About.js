import React, { Component } from "react";
import "./About.css";

class CV extends Component {
  render() {
    return (
      <div className="About">
        <h2>About</h2>
        <div className="t">
          <img src={require("./Headshot.jpeg")} alt="headshot"></img>
          <p className="as">
          Charley Drew-Wolak is a professional metal artist living and working in Brooklyn, New York. He attended undergraduate at Earlham College where he earned a BA in Art with a 3D Fabrication focus, a minor in Computer Science, and a Digital Arts Integrated Pathway. Charley's artistic focus is at the intersection of computer science, 3D fabrication, and metalsmithing. Charley has participated in professional projects for companies and private artists, designing their websites and creating digital content. He has served as a fabricator and graphic designer at a museums, and participated in multiple KMAC Couture Fashion Shows, among other creative projects. 
          </p>
        </div>
        <div className="Bio">
          <strong>Artist Statement</strong>
          <p>
            
          </p>
        </div>
      </div>
    );
  }
}

export default CV;

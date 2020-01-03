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
            Charley Drew-Wolak is in his final year at Earlham College where he
            is earning a BA in Art with a 3D Fabrication focus, a minor in
            Computer Science, and a Digital Arts Integrated Pathway. Charley has
            been a teaching assistant for multiple computer science, 3D
            fabrication, and metalsmithing classes. As a part of his study,
            Charley was awarded a four-year Bonner scholarship focused on
            service and professional career development. Charley has had the
            opportunity to regularly serve as a fabricator and graphic designer
            at two museums, and serve on the Community Fund Committee as
            Convenor. Recently, the Bonner Foundation supported Charley in
            completing a Web-Development internship in Myanmar.
          </p>
        </div>
        <div className="Bio">
          <strong>Artist Statement</strong>
          <p>
            My work is an exploration of movement, playfulness, fire,
            technology, and adornment. I collect skills, techniques, and ideas
            to maximize my creative potential and put the fab in fabrication.
            Exploring the nexus of the visual, digital, and performed, I look at
            how these elements interact. I believe innovation occurs when we
            destroy the illusion of separation; when we consider how different
            disciplines intersect.
          </p>
        </div>
      </div>
    );
  }
}

export default CV;

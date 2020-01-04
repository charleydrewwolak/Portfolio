import React, { Component } from 'react'
import './CV.css'

class CV extends Component {
  constructor(){
    super();
    this.state = {
      Exhibitions: [
        {
          year: "2019",
          name: "Strange Company",
          location: "Penland, NC, Penland School of Craft",
          info: " ",
        },
        {
          year: "2017, 2019",
          name: "Woodman Art Show",
          location: "Richmond, IN",
          info: " ",
        },
        {
          year: "2019",
          name: "The Word",
          location: "Richmond, IN",
          info: "Earlham College Magazine. Featured Artist.",
        },
        {
          year: "2018",
          name: "KMAC Couture",
          location: "Louisville, KY, Kentucky Museum of Craft",
          info: "Fashion Show",
        },
        {
          year: " 2018",
          name: "The Cruicible",
          location: "Richmond, IN",
          info: "Literary and Art Journal",
        },
      ],
      Experience: [
        {
          year: "2017 - Present",
          name: "Intro to 3D Fabrication",
          location: "Earlham College",
          info: "Teaching Assistant. Offer metalsmithing and CAD modeling help to 3D Fabrication students. Operate laser cutter and 3D printer. Maintain studio space. Prepare materials for class demonstrations and offer demonstrations.",
        },
        {
          year: "2017 - Present",
          name: "Joseph Moore Museum",
          location: "Richmond, IN",
          info: "Fabricator and Graphic Designer. ",
        },
        {
          year: "2019",
          name: "The Pre-Collegiate Program of Yangon",
          location: "Yangon, Myanmar",
          info: "Web Development Intern. Re-designed the website using React. https://precollegiateyangon.org/",
        },
        {
          year: "2017 - 2019",
          name: "Bonner Community Fund",
          location: "Richmond, IN",
          info: "Convener. Ran committee responsible for reviewing grant proposals, interviewing students making requests, and decisions concerning the allocation of funds requested.",
        },
        {
          year: "2018",
          name: "Data Structures",
          location: "Earlham College",
          info: "Teaching Assistant. Offered tutoring sessions, and assisted students during labs. Met weekly with teacher to provide feedback and refine materials.",
        },
        {
          year: "2017-2018",
          name: "Programming and Problem Solving",
          location: "Earlham College",
          info: "Teaching Assistant. Offered tutoring sessions, and assisted students during labs. Met weekly with teacher to provide feedback and refine materials.",
        },
        {
          year: "2017",
          name: "X-Tern Bootcamp",
          location: "Indianapolis, IN",
          info: "Student. 3-week programming intensive. Gained front end development experience with Javascript, CSS, HTML. Learned how to create interactive web content and implement user authentication using React and Firebase. Trained with Agile, Scrum, and Kanban.",
        },
      ],
      Skills: [
        {
          type: "SOFTWARE",
          kinds: "Adobe Suite: [Photoshop, Illustrator, and InDesign], Rhino, Cura, 123D Make, Arduino IDE, App Inventor",
        },
        {
          type: "PROGRAMMING",
          kinds: "Javascript, React, HTML, CSS, Python. Familiar with: C++, C, Swift, Java, Hardware: Arduino, VEX IQ.",
        },
        {
          type: "FABRICATION",
          kinds: "Laser cutting, vinyl cutting, 3D printing, welding: [MIG, TIG, and torch], soldering, lost-material casting, etching, metal shop, enameling, powder coating, anodizing, forging.",
        },
      ]

    }
  }
  render() {
    return (
      <div className="CV">
        <h2>Curriculum Vitae</h2>
        <h4>Education</h4>
            <tr>
                <td className="left">2016 - Present</td>
                <td>
                  <strong>Earlham College</strong>
                  <p>Studio Art Major – Concentration in 3D Fabrication 
                    <br/> Computer Science Minor 
                    <br/>Digital Arts Integrated Pathway
                    <br/><u>Bonner Scholar</u> –– a national four-year, service-based college scholarship program.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="left"><br/>2019<br/><br/>2019<br/><br/>2018</td>
                <td>
                  <strong>Penland School of Craft</strong>
                  <p>
                    <u>Focus on Fabrication</u> Iron-Two Month Concentration <br/>Andrew Hayes <br/> 
                    <u>From Hot to Cold</u> Iron One-Week Workshop <br/>Stephen Marchio <br/> 
                    <u>Anodizing Aluminum</u> Metals Two-Week Workshop  <br/>Frankie Flood 
                  </p>
                </td>
              </tr>
         <h4>Exhibitions and Publications</h4>
        { this.state.Exhibitions.map(m => (
            <tr>
                <td className="left">{m.year}</td>
                <td>
                  <strong>{m.name} </strong><i>{m.location}</i> <br/>
                  <p>{m.info}</p>
                </td>
              </tr>
         ))}
         <h4>Professional Experience</h4>
        { this.state.Experience.map(m => (
            <tr>
                <td className="left">{m.year}</td>
                <td>
                  <strong>{m.name} </strong><i>{m.location}</i> <br/>
                  <p>{m.info}</p>
                </td>
              </tr>
         ))}
         <h4>Technical Skills</h4>
        { this.state.Skills.map(m => (
            <tr>
                <td className="left"></td>
                <td>
                  <p><strong>{m.type}: </strong>{m.kinds}</p>
                </td>
              </tr>
         ))}
      </div>
    )
  }
}

export default CV


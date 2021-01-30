import React, { Component } from 'react'
import './CV.css'

class CV extends Component {
  constructor(){
    super();
    this.state = {
      Exhibitions: [ 
        {
          year: "2020",
          name: "KMAC Couture 2020 “Star Stuff,”",
          location: "Kentucky Museum of Craft, Louisville, KY",
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
          year: "2020 - Present",
          name: "City Metal Works",
          location: "Brooklyn, NY",
          info: "Metal Fabrication Engineer and Designer. Draft and develop shop drawings using Autocad, Rhino, and Solid Works. Adapt drawings to be optimized for the waterjet cutter. Work with clients to design custom restaurant equipment and miscellaneous projects. Create production drawings and communicate the project with the fabrication team - where to bend, weld, cut, rivet, screw, etc. Create layouts for restaurant equipment using KCL and Auto quotes."
        },
        {
          year: "2019",
          name: "The Pre-Collegiate Program of Yangon",
          location: "Yangon, Myanmar",
          info: "Web Development Intern. Re-designed the website using React. https://precollegiateyangon.org/",
        },
        {
          year: "2019 – 2020",
          name: "Intro to 3D Fabrication",
          location: "Earlham College",
          info: "Teaching Assistant. Offer metalsmithing and CAD modeling help to 3D Fabrication students. Operate laser cutter and 3D printer. Maintain studio space. Prepare materials for class demonstrations and offer demonstrations.",
        },
        {
          year: "2017 - 2020",
          name: "Joseph Moore Museum",
          location: "Richmond, IN",
          info: "Fabricator and Graphic Designer. ",
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
          kinds: "Adobe Suite: [Photoshop, Illustrator, and InDesign], Solid Works, Rhino, Autocad, Cura, 123D Make, Arduino IDE, App Inventor, Max MS, Microsoft Office Suite, OPERATING SYSTEMS: Mac and PC.",
        },
        {
          type: "PROGRAMMING",
          kinds: "Javascript, React, HTML, CSS, Python. Familiar with: C++, C, Swift, Java, Hardware: Arduino, VEX IQ",
        },
        {
          type: "FABRICATION",
          kinds: "Laser cutting, vinyl cutting, 3D printing, welding: [MIG, TIG, and torch], milling, soldering, casting, etching, metal shop, enameling, powder coating, anodizing, forging, turning, wood working, jewelry construction",
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


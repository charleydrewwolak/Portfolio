import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import CV from './CV';
import Gallery from './Gallery'
import Home from './Home'
import About from './About'
import { Nav, Navbar, } from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#">Charley Drew-Wolak</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#cv">CV</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
      <Router basename='/'>
        <Route exact path="/" component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/cv' component={CV} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/about' component={About} />
      </Router>


    </div>
  );
}

export default App;

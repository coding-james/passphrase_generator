import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Home from './components/Home.jsx';
import Generator from './components/Generator.jsx';
import Tips from './components/Tips.jsx';

function App() {
  return (
    <Router>
      <Navbar className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Privacy and Security Tips</Navbar.Brand>

          <Nav>
            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/generator" className="nav-link">Generator</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/tips" className="nav-link">Tips</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/tips" element={<Tips />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

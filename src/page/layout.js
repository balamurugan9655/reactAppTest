import React from "react";
import { Outlet,Link,useLocation } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import { Spinner } from "react-bootstrap";
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from "react";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgressBar({ progress }) {
  return (
    <div
      style={{
        width: `${progress}%`,
        height: "5px",
        backgroundColor: "blue",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease-in-out",
        zIndex: 1000,
        display: progress >= 120 ? "none" : "block",
      }}
    ></div>
  );
}


const Layout = () => {

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [renderPage, setRenderPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show progress bar
    setRenderPage(false); // Delay page rendering
    setProgress(0); // Reset progress bar

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 120) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false); // Hide progress bar
          setRenderPage(true); // Allow page rendering
        }, 200); // Slight delay to make the progress bar visible at 100%
      }
    }, 200); // Adjust speed here

    return () => clearInterval(interval); // Cleanup
  }, [location]);

    return (
        /*  <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" >Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/nopage" >NoPage</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </> */

        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap-Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/nopage">NoPage</Nav.Link>
              {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
                </NavDropdown>*/}
            </Nav>
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
      {loading && <ProgressBar progress={progress} />}
      {renderPage && <Outlet />} {/* Render page only after progress bar completes */}
      </Container>
      </>
    )
}
export default Layout ;
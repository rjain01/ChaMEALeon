import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Chamealeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Menu
            </Nav.Link>
          </Nav>
          {/* <NavDropdown title="Filter by Diet" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Vegan</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Vegetarian</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Paleo</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Keto</NavDropdown.Item>
          </NavDropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

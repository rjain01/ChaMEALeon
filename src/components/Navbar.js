import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/Navbar.css";
import Badge from 'react-bootstrap/Badge';


function CollapsibleExample() {
  return (
    <div id="nav-container">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id='nav-bar'>
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
            {/* <FontAwesomeIcon icon="fa-thin fa-cart-shopping" /><Badge bg="secondary">9</Badge> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;

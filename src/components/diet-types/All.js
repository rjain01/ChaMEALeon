import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/Menu.css";
import biryani from "../../assets/all/biryani.jpg";
import channamasala from "../../assets/all/biryani.jpg";
import tandoorichicken from "../../assets/all/biryani.jpg";

import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const All = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.id);
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>

      <h2 class="heading">All Menu</h2>
      <div id="card-display">
        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={biryani} />
          <a href="/biryani">
            <Card.Body>
              <Card.Title className="card-title">Biryani</Card.Title>
              <Button variant="success" onClick={() => setModalShow(true)}> ADD</Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              {/* <Button variant="success" className="center">ADD</Button> */}
            </Card.Body>
          </a>
        </Card>

        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={channamasala} />
          <a href="/biryani">
            <Card.Body>
              <Card.Title className="card-title">Channa Masala</Card.Title>
              <Button variant="success" className="center">
                ADD
              </Button>
            </Card.Body>
          </a>
        </Card>

        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={tandoorichicken} />
          <a href="/biryani">
            <Card.Body>
              <Card.Title className="card-title">Tandoori Chicken</Card.Title>
              <Button variant="success" className="center">
                ADD
              </Button>
            </Card.Body>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default All;

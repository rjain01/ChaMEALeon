import React from "react";
// For counter
import { useState } from "react";
//
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/Menu.css";
// import PopUp from "./components/diet-types/PopUp";
import biryani from "../../assets/all/biryani.jpg";
import channamasala from "../../assets/all/biryani.jpg";
import tandoorichicken from "../../assets/all/biryani.jpg";

const All = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.id);
  };

  const [modalShow, setModalShow] = React.useState(false);

  // Counter
  const [count, setCount] = useState(1);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    setCount(count-1);
  }

  return (
    <div>
      <h2 className="heading">All Menu</h2>
      <div id="card-display">
        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={biryani} />
          <Card.Body>
            <Card.Title className="card-title">Biryani</Card.Title>
            {/* <div>
                <Button variant="success" onClick={() => setModalShow(true)}>
                  ADD
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div> */}
            <div>
              <button onClick={dec}>-</button>
              {count}
              <button onClick={inc}>+</button>
            </div>
          </Card.Body>
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

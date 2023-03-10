import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../styles/Menu.css";
import biryani from "../../assets/all/biryani.jpg";
import channamasala from "../../assets/all/chana_masala.jpeg";
import tandoorichicken from "../../assets/all/chicken.jpeg";

const All = () => {
  let navigate = useNavigate();
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  const handleClick = (e) => {
    navigate(e.target.id);
  };


  return (
    <div>
      <h2 className="display-4">All Menu</h2>
      <div id="card-display">
        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={biryani} />
          <Card.Body>
            <h6 className="display-6">Biryani</h6>
            <div>
              <button className="button-24" onClick={dec}>
                -
              </button>
              {count}
              <button className="button-24" onClick={inc}>
                +
              </button>
            </div>
          </Card.Body>
        </Card>
        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={channamasala} />
          <Card.Body>
            <h6 className="display-6">Channa Masala</h6>
            <div>
              <button className="button-24" onClick={dec}>
                -
              </button>
              {count}
              <button className="button-24" onClick={inc}>
                +
              </button>
            </div>
          </Card.Body>
        </Card>

        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src={tandoorichicken} />
          <Card.Body>
            <h6 className="display-6">Tandoori Chicken</h6>
            <div>
              <button className="button-24" onClick={dec}>
                -
              </button>
              {count}
              <button className="button-24" onClick={inc}>
                +
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default All;

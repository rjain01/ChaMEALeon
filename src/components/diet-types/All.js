import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import '../../styles/Menu.css'

const All = () => {

  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.id);
  };

  return (
    <div>
      <h2 class="heading">All Menu</h2>

      <div id="card-display">
        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30" }}
        >
          <Card.Img variant="top" id="all" src="https://picsum.photos/100" />
          <a href="/biryani">
            <Card.Body>
              <Card.Title className="card-title">Biryani</Card.Title>
            </Card.Body>
          </a>
        </Card>

        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src="https://picsum.photos/100" />
          <a href="/channamasala">
            <Card.Body>
              <Card.Title className="card-title">Channa Masala</Card.Title>
            </Card.Body>
          </a>
        </Card>

        <Card
          onClick={handleClick}
          className="basic-card"
          style={{ width: "30%" }}
        >
          <Card.Img variant="top" id="all" src="https://picsum.photos/100" />
          <a href="/tandoorichicken">
            <Card.Body>
              <Card.Title className="card-title">Tandoori Chicken</Card.Title>
            </Card.Body>
          </a>
        </Card>

      </div>
    </div>
  );
};

export default All;

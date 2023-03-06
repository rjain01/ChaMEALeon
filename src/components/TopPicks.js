import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/TopPicks.css'

function BasicExample() {
  return (
    <div>
        <h2>Top Customer Picks</h2>

    <div id='toppicks-cards'>
        <Card className='toppicks-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='toppicks-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='toppicks-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='toppicks-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
    </div>

    </div>
  );
}

export default BasicExample;
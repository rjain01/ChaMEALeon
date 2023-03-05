import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/CategoryCard.css'

function BasicExample() {
  return (
    <div>
        <h2>Brosw by categories</h2>
    <div id='category-cards'>
        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
    </div>
        <div id='category-cards'>
        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
        <Card.Img variant="top" src="https://picsum.photos/100" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>

        <Card className='category-card' style={{ width: '20%' }}>
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../styles/CategoryCard.css'


function BasicExample() {
    let navigate = useNavigate();
    const handleClick = (e) => {
        navigate(e.target.id)
    }

    return (
        <div>
            <h2>Browse by Meal Preference</h2>
            <div id='category-cards'>
                <Card onClick={handleClick} className='category-card' style={{ width: '20%' }} >
                    <Card.Img variant="top" id='all' src="https://picsum.photos/100" />
                    <a href='/all'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </a>
                </Card>

                <Card onClick={handleClick} className='category-card' style={{ width: '20%' }} >
                    <Card.Img variant="top" id='vegan' src="https://picsum.photos/100" />
                    <a href='/vegan'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </a>
                </Card>
                <Card onClick={handleClick} className='category-card' style={{ width: '20%' }} >
                    <Card.Img variant="top" id='veg' src="https://picsum.photos/100" />
                    <a href='/veg'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </a>
                </Card>
                <Card onClick={handleClick} className='category-card' style={{ width: '20%' }} >
                    <Card.Img variant="top" id='nonveg' src="https://picsum.photos/100" />
                    <a href='/nonveg'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </a>
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
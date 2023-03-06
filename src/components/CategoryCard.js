import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../styles/CategoryCard.css'
import keto from '../assets/keto.jpg'
import lowcarb from '../assets/low-carb.jpg'
import medit from '../assets/mediterranean.jpg'
import nonveg from '../assets/non-veg.jpg'
import paleo from '../assets/paleo.jpg'
import veg from '../assets/vegetarian.jpg'
import vegan from '../assets/vegan.jpg'


function BasicExample() {
    let navigate = useNavigate();
    const handleClick = (e) => {
        navigate(e.target.id)
    }

    return (
        <div>
            <h1 className='display-4'>Browse by Meal Preference</h1>
            <div id='category-cards'>
                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }} >
                    <Card.Img variant="top" id='all' src={paleo} />
                    <a href='/all'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">All</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>

                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }} >
                    <Card.Img variant="top" id='vegan' src={vegan} />
                    <a href='/vegan'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Vegan</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>
                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }} >
                    <Card.Img variant="top" id='veg' src={veg} />
                    <a href='/veg'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Vegetarian</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>
            </div>
            <div id='category-cards'>
                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }} >
                    <Card.Img variant="top" id='nonveg' src={nonveg} />
                    <a href='/nonveg'>
                        <Card.Title>
                            <h3>
                                <small class="text-muted">Non Vegetarian</small>
                            </h3>
                        </Card.Title>
                    </a>
                </Card>
                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }}>
                    <Card.Img variant="top" id="lowcarb" src={lowcarb} />
                    <a href='/lowcarb'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Low Carbs</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>

                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }}>
                    <Card.Img variant="top" id="paleo" src={paleo} />
                    <a href='/paleo'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Paleo</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>
            </div>
            <div id='category-cards'>
                <Card onClick={handleClick} className='category-card' style={{ width: '30%' }}>
                    <Card.Img variant="top" id="keto" src={keto} />
                    <a href='/keto'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Keto</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>

                <Card className='category-card' style={{ width: '30%' }}>
                    <Card.Img variant="top" id="medit" src={medit} />
                    <a href='/medit'>
                        <Card.Body>
                            <Card.Title>
                                <h3>
                                    <small class="text-muted">Mediterranean</small>
                                </h3>
                            </Card.Title>
                        </Card.Body>
                    </a>
                </Card>
            </div>
        </div>
    );
}

export default BasicExample;
import React from 'react';

import { Container } from './styles';

import Car from './assets/car.png'
import Car2 from './assets/car2.png'

export default function carousel() {
  return (
    <Container>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Car} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Car2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Car} alt="Third slide"/>
                </div>
            </div>
        </div>
    </Container>
  );
}

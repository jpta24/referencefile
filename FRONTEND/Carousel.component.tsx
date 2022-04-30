import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

/* in CSS fix the sizes
	.carouselFix {
		width: 200px;
		height: 150px;
		margin-bottom: 20px;
	} */
// impor Imgs
import MO1 from './Assets/Img/MO/MO1.png';
import MO2 from './Assets/Img/MO/MO2.png';
import MO3 from './Assets/Img/MO/MO3.png';
import MO4 from './Assets/Img/MO/MO4.png';
import MOa from './Assets/Img/MO/MOa.png';
import MOb from './Assets/Img/MO/MOb.png';

const AboutMe = () => {
	return (
		<Carousel fade className='carouselFix mx-auto'>
			<Carousel.Item>
				<img className='carouselFix' src={MOb} alt='First slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='carouselFix' src={MO1} alt='Second slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='carouselFix' src={MO3} alt='Third slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='carouselFix' src={MO2} alt='Third slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='carouselFix' src={MO4} alt='Third slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='carouselFix' src={MOa} alt='Third slide' />
			</Carousel.Item>
		</Carousel>
	);
};

export default AboutMe;

import React from 'react';
// en el componente colocar el color y stroke AMBAS del mismo color

interface Props {
	stroke?: string;
	hover?: string;
	className?: string;
}
//  in CSS file add
//      .pdfIcon:hover {stroke:red;color:red}

const Pdf = (props: Props) => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			stroke-width='0'
			viewBox='0 0 24 24'
			className='pdfIcon'
			height='30px'
			width='30px'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill='none'
				stroke={props.stroke}
				stroke-width='2'
				className='pdfIcon'
				d='M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5'
			></path>
		</svg>
	);
};

export default Pdf;
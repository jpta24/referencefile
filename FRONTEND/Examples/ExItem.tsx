import React from 'react';

import { ProjectInterface } from './ProjectInterface';
// crear el interface de las Props a recibir, no hace falta color el key
interface Props {
	eachProject: ProjectInterface;
}

// dentro de return usar a conveniencia haciendo llamadds con eachProject.XXXX
const ProjectItem = ({ eachProject }: Props) => {
	return (
		<div className='col-md-4'>
			<div className='card-body cardPr'>
				<h3 className='titlePr'>{eachProject.name}</h3>

				<div className='text-center'>
					<Carousel fade className='w-100 mx-auto'>
						{eachProject.img.map((eachImg: string) => {
							return (
								<Carousel.Item className='justify-items-center'>
									<img className='carouselPr' src={eachImg} alt='alt' />
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>

				<div className='mx-auto'>
					{eachProject.technologies.map((eachTech: string) => {
						return <img src={eachTech} alt='HTML' className='mx-2 imgPr' />;
					})}
				</div>
				<div className='text-center text-light my-2 pPr'>
					<p>{eachProject.description}</p>
				</div>
				<div className='py-3'>
					<a className='' href={eachProject.repository} target='blank'>
						<FaGithub className='mx-2 imgPr links' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;

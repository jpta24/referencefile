import React, { useState } from 'react';

import { ProjectInterface } from './ProjectInterface'; // ver ExInterface.ts
import ProjectItem from './ExItem'; // crear in componente que va a usar individualmente cada elemento each // para ProjectItem ver ExItem.tsx

import projectsData from './projects.module'; // si son datos staticos, si no Ver ExMapDB.tsx // estos datos estan en Ex.module.tsx

const Projects = () => {
	const [Projects] = useState<ProjectInterface[]>(projectsData);

	return (
		<div id='projects' className='row text-center projects scrollY'>
			<h2 className='titleSk'>My Projects</h2>

			<div className='row mx-auto'>
				{Projects.map((eachProject: ProjectInterface) => {
					return (
						<ProjectItem eachProject={eachProject} key={eachProject._id} />
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

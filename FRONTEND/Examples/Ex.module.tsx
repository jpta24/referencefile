import { ProjectInterface } from './ExampleInterface'; // hacer un interface

import weatherApp from './Assets/Img/Projects/weatherAPP.png';
import FS01 from './Assets/Img/Projects/FullStackMEAR01.png';
import FS02 from './Assets/Img/Projects/FullStackMEAR02.png';
import FS03 from './Assets/Img/Projects/FullStackMEAR03.png';

import STLT01 from './Assets/Img/Projects/STLT01.png';
import STLT02 from './Assets/Img/Projects/STLT02.png';
import STLT03 from './Assets/Img/Projects/STLT03.png';

import htmlI from './Assets/Img/Skills/html5.png';
import cssI from './Assets/Img/Skills/css.png';
import jsI from './Assets/Img/Skills/JSicon.png';

import mongoI from './Assets/Img/Skills/mongodbIcon.png';
import exI from './Assets/Img/Skills/ExIcon.png';
import reactI from './Assets/Img/Skills/ReactIcon.png';
import nodeI from './Assets/Img/Skills/NodeIcon.png';
import tsI from './Assets/Img/Skills/TSIcon.png';

import gitI from './Assets/Img/Skills/GITicon.png';
import npmI from './Assets/Img/Skills/npmicon.png';
import bootI from './Assets/Img/Skills/BootstrapIcon.png';

const gitHubSVG =
	'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0';

const gitHubSVG2 =
	'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=150&g=150&b=150';

const projectsData: ProjectInterface[] = [
	{
		_id: 1,
		name: 'FullStack MEAR - My Learning Videos',
		img: [FS01, FS02, FS03],
		technologies: [mongoI, exI, reactI, nodeI, tsI, bootI, npmI],
		repository: 'https://github.com/jpta24/FullStack-MERN-My-Fav-Videos',
		description:
			'React App to practice CRUD with database and using all FullStack technologies',
		icon: gitHubSVG,
	},
	{
		_id: 2,
		name: 'WeatherApp',
		img: [weatherApp],
		technologies: [reactI, nodeI, bootI, gitI],
		repository: 'https://github.com/jpta24/weather-time-app',
		description:
			'React App to practice external API usage and get weather for 3 cities, also managing date and date converts',
		icon: gitHubSVG2,
	},

	{
		_id: 3,
		name: 'SITELOTRAIGO Google Chrome Extension',
		img: [STLT01, STLT02, STLT03],
		technologies: [htmlI, cssI, jsI],
		repository: 'https://github.com/jpta24/Sitelotraigo_ChromeExtension',
		description:
			'Chrome Extension, for a Client to get Shipping Price to Colombia on every Amazon Product Website',
		icon: gitHubSVG,
	},
];

export default projectsData;

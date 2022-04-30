import React from 'react';
import ReactDOM from 'react-dom'; // para manejar todo el DOM del navegador
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // para cambiar entre direcciones dentro de la misma pagina
import reportWebVital from './reportWebVitals'; // propio de react
import { ToastContainer } from 'react-toastify'; // para notificaciones en pantalla

import $ from 'jquery'; // jquery
import Popper from 'popper.js'; // jquery
import 'bootstrap/dist/js/bootstrap.bundle.min';

//COMPONENTES
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar';

//CSS
import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<div className='container p-4'>
				<Switch>
					<Route exact path='/' component={VideoList} />
					<Route path='/create-video' component={VideoForm} />
					<Route path='/update/:id' component={VideoForm} />
				</Switch>
				<ToastContainer />
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVital();

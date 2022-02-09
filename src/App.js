import React, { useEffect, useState, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';

import Footer from './components/Footer';
import Home from './pages';

import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		Aos.init({});
	}, []);
	return (
		<>
			<GlobalStyle />
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/rentals' element={<Rentals />} />
				<Route path='/homes' element={<Homes />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

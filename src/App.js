import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';

import Footer from './components/Footer';
import Home from './pages';

import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Homes from './pages/Homes';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
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

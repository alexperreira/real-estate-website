import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Listings from '../components/Listings';
import { infoData, infoDataTwo } from '../data/InfoData';
import { sliderData } from '../data/SliderData';

const Home = () => {
	return (
		<>
			<Hero slides={sliderData} />
			<InfoSection {...infoData} />
			<Listings />
			<Features />
			<InfoSection {...infoDataTwo} />
		</>
	);
};

export default Home;

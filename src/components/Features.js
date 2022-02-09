import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageOne from '../images/kitchen-1.jpg';

const Section = styled.section`
	background: #000d1a;
	padding: 12rem 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Container = styled.div`
	background: #fff;
	padding: 3rem 2rem;
	position: relative;
`;

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const ColumnLeft = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0rem -15px;
	justify-content: flex-start;
	padding: 1rem;
`;

const Content = styled.div`
	flex: 0 0 50%;

	h1 {
		margin-bottom: 2rem;
		font-size: 2rem;
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	@media screen and (max-width: 768px) {
		flex: 0 0 100%;
		max-width: 100%;
		margin-top: 250px;
	}
`;

const ColumnRight = styled.div`
	position: absolute;
	top: -80px;
	right: 0;
	max-width: 850px;
	height: 140%;
	width: 45%;
	padding-left: 1rem;

	@media screen and (max-width: 768px) {
		height: 320px;
		top: -65px;
		width: 80%;
		margin: 0 auto;
		left: 0;
	}
`;

const Image = styled.img`
    height: 100%;
    width: 100%:
    object-fit: cover;

`;

const Features = () => {
	return (
		<Section>
			<Container>
				<Wrapper>
					<ColumnLeft>
						<Content>
							<h1>Stunning Interior</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
								nesciunt rem cumque saepe, aliquam beatae nulla adipisci esse
								ipsum at!
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
								ullam!
							</p>
							<Button to='/homes'>Learn More</Button>
						</Content>
					</ColumnLeft>
					<ColumnRight>
						<Image src={ImageOne} />
					</ColumnRight>
				</Wrapper>
			</Container>
		</Section>
	);
};

export default Features;
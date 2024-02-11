import React from "react";
import NavBar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import TheCard from "./Card.jsx"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Footer from "./Footer.jsx";







const Home = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Container>

				<Row xs={1} md={2} lg={4}>
					<Col>
					<TheCard 
					title="Titulo 1" 

					text="Textooooo wuaaa"/>
					</Col>

					<Col>
					<TheCard 
					title="Titulo 2" 
					
					text="aprendiendo a usar los props 👀"/>
					</Col>

					<Col>
					<TheCard 
					title="Titulo 3" 
					
					text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum minus odit odio illo ex quod, ipsam, amet temporibus recusandae optio molestiae veniam dolor, reiciendis quam deleniti! Consectetur, at quas!"/>
					</Col>

					<Col>
					<TheCard 
					title="Titulo 4" 
					
					text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum minus odit odio illo ex quod, ipsam, amet temporibus recusandae optio molestiae veniam dolor, reiciendis quam deleniti! Consectetur, at quas!"/>
					</Col>
				
				</Row>
			</Container>
			<Footer />
		</>
	)
};

export default Home;

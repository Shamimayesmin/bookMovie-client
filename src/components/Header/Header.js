import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
	
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Link to='/'>
						<Navbar.Brand>Home</Navbar.Brand>
					</Link>
					<Nav className="me-auto me-3">
						
						<Link to='/features'><Nav>Features</Nav></Link>
						
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;

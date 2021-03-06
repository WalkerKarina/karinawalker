import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'NavItemActive': ''
		}
	}

	activeItem = (x) => {
		if (this.state.NavItemActive.length > 0){
			document.getElementById(this.state.NavItemActive).classList.remove('active');
	}

	this.setState({'NavItemActive':x},() => {
		document.getElementById(this.state.NavItemActive).classList.add('active');
		});
	};

	render(){
		return (
			<Navbar id="navbarstyle">
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="m-auto">
						<LinkContainer to="/about">
							<Nav.Link href="/about" activec={this.activeItem}>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/interests">
							<Nav.Link href="/interests" activec={this.activeItem}>Interests</Nav.Link>
						</LinkContainer>
						{/*<LinkContainer to="/education">
							<Nav.Link href="/education" activec={this.activeItem}>Education</Nav.Link>
						</LinkContainer>*/}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
import React, { Component } from 'react';
import Social from '../components/SocialComponent';

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<div>
					<h1>Contact Me</h1>
					<h3>Email  :   <a href="mailto: karina.walker.nicky@gmail.com">karina.walker.nicky@gmail.com</a></h3>
				</div>
				<div className="contactSocial">
						<Social />
				</div>
			</div>
		)
	}
}
export default Contact;
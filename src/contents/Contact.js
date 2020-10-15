import React, { Component } from 'react';
import Social from '../components/SocialComponent';

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<div>
					<h1>Contact Me</h1>
					<h3>Email  :   karina.walker.nicky@gmail.com</h3>
					<h3>Instagram   :   @karina.walker</h3>
				</div>
				<div className="contactSocial">
						<Social />
				</div>
			</div>
		)
	}
}
export default Contact;
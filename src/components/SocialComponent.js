import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className="social">
				{/*<a className="btn" href="http://www.facebook.com/profile.php?id=" ><i className="fa fa-facebook"></i></a>*/}
				<a className="btn" href="https://www.linkedin.com/in/karina-walker-54bb69144/" ><i className="fa fa-linkedin"></i></a>
				<a className="btn" href="https://github.com/WalkerKarina" ><i className="fa fa-github"></i></a>
				<a className="btn" href="mailto:khwalker@g.hmc.edu" ><i className="fa fa-envelope-o"></i></a>
			</div>
		)
}
export default Social;
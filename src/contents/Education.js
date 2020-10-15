import React, { Component } from 'react';
import WideCard from '../components/WideCardComponent';
import Footer from '../components/FooterComponent';

//want the wide card - accordian style
class Education extends Component {

	displayEducation = () => {
		this.setState({
			displayEducation: !this.state.displayEducation
		})
	}

	educationInfo = () => {
		if (this.props.onClick) {
			return (
				<div>extra info</div>
			);
		}
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1>My Education</h1>
					<WideCard title="Bachalor of Science" where="Harvey Mudd College USA" from="August 2021" to="Present"/>
					<WideCard title="IB Diploma" where="United World College of South East Asia Dover" from="2007" to="2020"/>
				</div>
				<Footer />
			</div>
		)
	}
}
export default Education;
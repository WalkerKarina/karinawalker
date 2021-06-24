import React, { Component } from 'react';
import WideCard from '../components/WideCardComponent';
import Footer from '../components/FooterComponent';

//want the wide card - accordian style
class Education extends Component {

	constructor(props) {
		super(props);
		this.state={
			'myAwards':['SheHacks First Place U18 2019', 'Grade 11 Overall Academic Attainment Award (1 out of 3 from 360 students)', 'Grade 11 Mathematics Academic Award (1 out of 4 from 360 students)','UKMT Gold 2018 Maths Competition', 'UKMT Silver 2019 Maths Competition']
		};
	}

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
				<div className="row-content">
					<h1>My Education</h1>
					<WideCard title="Bachelor of Science in Mathematics and Computer Science" where="Harvey Mudd College USA" from="August 2021" to="Present"/>
					<WideCard title="IB Diploma" where="United World College of South East Asia Dover" from="2007" to="2020"/>
				</div>
				<div className="row-content">
					<h1>Courses I've Taken</h1>
					<ul>
						<li> <a href= "https://www.coursera.org/account/accomplishments/specialization/certificate/4YU95LCD9VT2"> DeepLearning.AI TensorFlow Developer Specialization (4 courses)</a></li>
						<li><a href= "
https://www.coursera.org/account/accomplishments/specialization/certificate/H6FBGFNCTABJ">Mathematics for Machine Learning Specialization (3 courses)</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/specialization/certificate/VXANGX5UMBL2">Deep Learning Specialization (5 courses)</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/specialization/certificate/BL2E4P4EGSY9">Python for Everybody Specialization (5 courses)</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/certificate/QNKDV9ESPW3J">Building Database Applications in PHP</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/certificate/JW26CMZZT6QN">Front-End Web Development with React</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/certificate/Z4JF2LSWWE6Q">Building Web Applications in PHP</a></li>
						<li> <a href="https://www.coursera.org/account/accomplishments/certificate/JW26CMZZT6QN">Front-End Web UI Frameworks and Tools: Bootstrap 4</a></li>
						<li> <a href="
https://www.coursera.org/account/accomplishments/certificate/ARC5NHED8Q37">Introduction to Programming with MATLAB </a></li>
						<li>Introduction to Mathematical Thinking by Stanford University</li>
					</ul>
				</div>
				{/*}
				<div className="row-content">
					<h1>My Awards</h1>
					<ul>
						{this.state.myAwards.map((value)=>{
						return <li>{value}</li>
						})}
					</ul>
				</div>
				*/}
				<Footer />
			</div>
		)
	}
}
export default Education;
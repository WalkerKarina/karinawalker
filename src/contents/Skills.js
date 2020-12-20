import React, { Component } from 'react'
import Footer from '../components/FooterComponent';

//put my list of maths competiton awards
//make the awards section go beside the my skills

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state={
			'myskills':['React.js', 'JavaScript', 'Python', 'node.js', 'Java', 'PHP','CSS/HTML','SQL','MongoDB'],
			'myAwards':['SheHacks First Place U18 2019', 'Grade 11 Overall Academic Attainment Award (1 out of 3 from 360 students)', 'Grade 11 Mathematics Academic Award (1 out of 4 from 360 students)','UKMT Gold 2018 Maths Competition', 'UKMT Silver 2019 Maths Competition']
		};
	}

	render() {
	return (
		<div className="container">
			<div className="row-content">
				<div className="col">
					<h1>My Certificates</h1>
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
						<li>Introduction to Mathematical Thinking</li>
					</ul>
				</div>
				<div className="col col">
					<h1>My Awards</h1>
					<ul>
						{this.state.myAwards.map((value)=>{
						return <li>{value}</li>
						})}
					</ul>
				</div>
				<div className="col col">
					<h1>My Skills</h1>
					<ul>
						{this.state.myskills.map((value)=>{
						return <li>{value}</li>
						})}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
		)
	}
}
export default Skills;
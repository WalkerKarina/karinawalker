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
						<li>DeepLearning.AI TensorFlow Developer Specialization (4 courses)</li>
						<li>Mathematics for Machine Learning Specialization (3 courses)</li>
						<li>Deep Learning Specialization (5 courses)</li>
						<li>Python for Everybody Specialization (5 courses)</li>
						<li>Building Database Applications in PHP</li>
						<li>Front-End Web Development with React</li>
						<li>Building Web Applications in PHP</li>
						<li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
						<li>Introduction to Programming with MATLAB</li>
						<li>Introduction to Mathematical Thinking</li>
					</ul>
				</div>
				<div className="col col-md-4">
					<h1>My Skills</h1>
					<ul>
						{this.state.myskills.map((value)=>{
						return <li>{value}</li>
						})}
					</ul>
				</div>
				<div className="col col-md-8">
					<h1>My Awards</h1>
					<ul>
						{this.state.myAwards.map((value)=>{
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
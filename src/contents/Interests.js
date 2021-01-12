import React, { Component } from 'react'
import Footer from '../components/FooterComponent';
import breadPic from '../images/breadPic.jpeg';

//put my list of maths competiton awards
//make the awards section go beside the my skills

class Interests extends Component {
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
			<div className="row row-content">
				<p>My first attempt at Spelt Bread</p>
				<div>
					<img src={breadPic} alt="breadPic" className="profilePic img-fluid"></img>
				</div>
			</div>
			<div className="row row-content">
				<p>A few articles on Maths</p>
				<div>
					<a href="https://medium.com/@karinawalker">MathsBlogDover</a>	
				</div>
			</div>


			<Footer />
		</div>
		)
	}
}
export default Interests;
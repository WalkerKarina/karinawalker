import React, { Component } from 'react'
import Footer from '../components/FooterComponent';

//put my list of maths competiton awards
//make the awards section go beside the my skills

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state={
			'myskills':['HTML','CSS','JS','PHP','REACT JS','MONGODB','REACT NATIVE'],
			'myAwards':['SheHacks First Place U18 2019', 'UKMT Gold 2018 Maths', 'UKMT Silver 2019 Maths']
		};
	}

	render() {
	return (
		<div className="container">
			<div className="row-content">
				<div className="col col-md-4">
					<h1>My Skills</h1>
					<ul>
						{this.state.myskills.map((value)=>{
						return <li>{value}</li>
						})}
					</ul>
				</div>
				<div className="col col-md-6">
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
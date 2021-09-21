import React, { Component } from 'react'
import Footer from '../components/FooterComponent';
import driftice from '../images/driftice.jpeg';

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
				<div className="col-12 col-md-8">
				 	<h4>Some of my Gap Year experiences</h4>
				 	<ul>
				 		<li>Became a skateboarder — became a regular at the skateparks in Singapore</li>
				 		<li>Worked at <a href="https://rusutsu.com/en/">Rusutsu</a> ski resort in Hokkaido for 3 months — progressed from a beginner to advanced snowboarder</li>
				 		<li>Executed a solo expedition around northern Hokkaido</li>
				 		<li>Surfed in coastal Japan — I can stand!</li>
				 		<li>Paraglided in Kyoto</li>
				 		<li>Travelled historical sights in Osaka and Kyoto</li>
				 		<li>Volunteered at an apple farm — <a href="https://www.youtube.com/watch?v=thGnQ6msE78&t=74s">pick apples with me</a>, <a href="https://www.youtube.com/watch?v=k_v5xKGXWWw&t=165s">walk around the farm with me</a>, and a <a href="https://www.instagram.com/p/CICq4aEjfLo/">promotional video I created</a></li>
				 		<li>Completed a Manual Driver's License camp</li>
				 		<li>Software Engineer internship at a cryptocurrency brokerage firm</li>
				 	</ul>
				</div>
				<div className="col-12 col-md-4">
					<br></br>
					<br></br>
					<img src={driftice} alt="driftice" className="img-fluid"></img>
					<span >The surreal Northern Hokkaido Drift Ice</span>
				</div>
			</div>
			 <div className="row row-content">
				<div className="col col-md-12">
					<h4>Ethical Eating</h4>
					<p>
When I turned 18, I became a vegetarian. I’ve spent the past two years plunging into the ethics of environmentally friendly eating. It’s deeply important to me that I view this change as a choice. So for every meat product I’ve chosen not to consume, I’ve found 2-3 new foods to taste and incorporate into my diet.
						</p>
					<p>
During my gap year, I focused on exploring nutritional science and veganism. I tasted a rainbow of beans and ancient grains and convinced my parents to entertain my adventurous recipes.

					</p>
					<p>
I took it upon myself to become the designated restaurant finder amongst my friends and even surprised them with elusively meaty but 100% veggie food. Over the past few months, I’ve warmly welcomed two of my friends into the world of vegetarianism.
					</p>
				</div>
			</div>
			<div className="row row-content">
				<div className="col col-md-12">
				 	<h4>I’m really into documentaries and historical dramas. Here are some of my favourites:
</h4>
				 	<ul>
				 		<li>The Great</li>
				 		<li>Planet of The Humans</li>
				 		<li>The Need to Grow</li>
				 		<li>Misbehaviour</li>
				 		<li>The Suffragettes</li>
				 		<li>Seaconspiracy</li>
				 	</ul>
				</div>
			</div>
			<div className="row row-content">
				<div className="col col-md-12">
				<h4>I also <a href="https://medium.com/@karinawalker">write.</a></h4>
				</div>
			</div>
			<Footer />
		</div>
		)
	}
}
export default Interests;
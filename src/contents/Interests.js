import React, { Component } from 'react'
import Footer from '../components/FooterComponent';
import breadPic from '../images/breadPic.jpeg';

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
				<div className="col col-md-8">
					<h4>Ethical Eating</h4>
					<p>
When I turned 18, I became a vegetarian. I’ve spent the past two years plunging into the ethics of environmentally-friendly eating. It’s deeply important to me that I view this change as a choice, rather than a limitation I’ve imposed on myself. So for every meat product I’ve chosen not to consume, I’ve found 2-3 new foods to taste and incorporate into my diet.
						</p>
					<p>
During my gap year, I focused on exploring nutritional science and veganism. I tasted a rainbow of beans and ancient grains, and convinced my parents to entertain my adventurous recipes.

					</p>
					<p>
I took it upon myself to become the designated restaurant finder amongst my friends, and even surprised them with elusively meaty but 100% veggie food. Over the past few months I’ve warmly welcomed two of my friends into the world of vegetarianism.
					</p>

					
				</div>
				<div className="col col-md-4">
					<br></br>
					<br></br>
					<img src={breadPic} alt="breadPic" className="img-fluid"></img>
					<span>My first attempt at Spelt Bread</span>
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
				 	</ul>
				</div>
			</div>
			<div className="row row-content">
				<div className="col col-md-12">
				<h4>I also wrote a few articles on interesting mathematics. <a href="https://medium.com/@karinawalker">MathsBlogDover</a></h4>
				</div>
			</div>
			<Footer />
		</div>
		)
	}
}
export default Interests;
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
				 	<p>My main goal for my gap year was to experience as many different and exciting things the world has to offer as possible. This included:</p>
				 	<ul>
				 		<li>A Software Engineer internship at a cryptocurrency brokerage firm</li>
				 		<li>Learning how to skateboard. I soon became a regular at the skateparks in Singapore!</li>
				 		<li>Worked at <a href="https://rusutsu.com/en/">Rusutsu</a> ski resort in Hokkaido, Japan for 3 months. Now, I cannot stop dreaming about the next time I will get to go snowboarding!</li>
				 		<li>Paragliding in Kyoto, Japan. </li>
				 		<li>Executing a solo expedition around northern Hokkaido, Japan. I swam in arctic drift ice, visited an ice village, and led a self-guided local food tour. </li>
				 		<li>Surfing in coastal Japan. (I can now stand!)</li>
				 		<li>Backpacking around Osaka and Kyoto. Having grown up outside of my home country, Japan, this was especially meaningful to me as I got to reconnect with my roots. </li>
				 		<li>Experimenting with vegan and vegetarian cooking. I even convinced my parents to try my adventurous recipes of colorful beans and ancient grains! </li>
				 		<li>Getting my Manual Driver's License.</li>
				 		<li>Volunteering at an apple farm that aims to revolutionize traditional Japanese farming with technology. I created <a href="https://www.instagram.com/p/CICq4aEjfLo/">social media content</a> to promote the farm. Click on these links to <a href="https://www.youtube.com/watch?v=thGnQ6msE78&t=74s">pick apples with me</a> and <a href="https://www.youtube.com/watch?v=k_v5xKGXWWw&t=165s">walk around the farm with me.</a></li>
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
When I turned 18, I became a vegetarian. I have spent the past two years plunging into the ethics of environmentally friendly eating and nutritional science. It is deeply important to me that I view this change as a choice. As such, for every meat product I have chosen not to consume, I have found 2-3 new foods to taste and incorporate into my diet. 
					</p>
					<p>
I have now become the designated restaurant finder for my friends and have continuously surprised them with elusively meaty but 100% veggie food. Over the past few months, I have warmly welcomed two of my friends into the world of vegetarianism.
					</p>
				</div>
			</div>
			<div className="row row-content">
				<div className="col col-md-12">
				 	<h4>I also love documentaries and historical dramas. </h4>
				 	<p>Here are some of my favorites:</p>
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
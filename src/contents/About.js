import React, { Component } from 'react';
import profilePicture from '../images/profile_image.png';
import Footer from '../components/FooterComponent';
import Social from '../components/SocialComponent';

//get the screen size changing image movement to work
//include hyperlinks to all my stuff in the about page

class About extends Component {
	render() {
		return (
			<div className="container">
				<div className="row row-content">
					<div className="col col-md-8 col-sm-8">
						<h1 className="subtopic">About Me</h1>
						<h4>Hey there,</h4>
						<h1>I'm Karina Walker</h1>
						<br></br>
						<p>
							I'm Karina, class of 2025 at Harvey Mudd College, Claremont where I will be studying Mathematics and Computer Science. 
						</p>
						<p>
							During my 2020-2021 gap year, I have been studying Machine Learning and how to build products. I'm especially interested in the mathematics used in machine learning. 
							Although I have been studying Computer Science since 2016, I found that the conventional subject of Computer Science taught me little about the actual process of how to  produce good products. I've been working on full-stack web development as well as using tensorflow to integerate deep learning in various products.
						</p>
					</div>
					<div className="col col-md-4 col-sm-8">
						<img src={profilePicture} alt="ProfilePicture" className="profilePic img-fluid"></img>
						<Social />
					</div>
				</div>
				<div className="row row-content">
					<div className="col col-md-8">
						<h3>Current Projects</h3>
						<ul>
							<li><b>SOS For Haze</b> — Developed website for an NGO SOS For Haze. Raises awareness on the impact deforestation can have on the environment.</li>
							<li><b>Online Whiteboard</b> — Developed website to enbale whiteboard drawings on the web.</li>
							<li><b>Teaching Report</b> — Website which enables tutors and students to keep track of their online learning.</li>
						</ul>
						<br></br>
						<h3>Past Projects</h3>
						<ul>
							<li><b>Salude</b> — SheHacks U18 First Place Winner 2019. Created an application under the theme of "Empowerment". Presented to Visa Executives and various entrepreneurs.</li>
							<li><b>Easify NLP</b> — An automated recipe converter using spaCy, an NLP library. Automatic identification of key components in a recipe to enable units conversion. </li>
							<li><a href="https://walkerkarina.github.io/my_portfolio_v2/#/about"><b>My Portfolio</b></a></li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default About;
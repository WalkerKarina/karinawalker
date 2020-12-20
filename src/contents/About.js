import React, { Component } from 'react';
import profilePicture from '../images/profile_image.png';
import Footer from '../components/FooterComponent';
import Social from '../components/SocialComponent';

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
							I'm Karina, class of 2025 at Harvey Mudd College, California, where I am set to study Mathematics and Computer Science. I am currently creating multiple web applications that incorporate machine learning solutions.  
						</p>
						<p>
During my gap year from Aug 2020, amongst other certifications, I have completing the Deep Learing Specialization. I am especially interested in the mathematics used in machine learning and understanding lower level implementations.
</p>
<p>
My current project is implementing OpenAI’s GPT2 text-generation model. As an online tutor, I spend a lot of time writing student reports.  As such, I aim to automate parts of the process. I initially attempted a conversion to tensorflow.js to run the model in browser, but found the model too large for the limited browser memory. Subsequently, I have progressed to creating a REST API to serve the model to browser.
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
							<li><b>Teaching Report</b> — Implementing GPT2 NLP model into browser to automate generation of reports. </li>
							<li><b>SOS For Haze</b> — Developing a website for an NGO SOS For Haze. To raise awareness on the negative impact haze and deforestation has on the environment.</li>
						</ul>
						<br></br>
						<h3>Past Projects</h3>
						<ul>
							<li><b><a href="https://walkerkarina.github.io/doodle/">Doodle</a></b> — Implementation and creation of CNN model using Doodle's Quick Draw Dataset. Runs in brower using tensorflow.js</li>
							<li><a href="http://shop.oogushi-farm2.co.jp/"><b>Oogushi Farm</b></a> — Re-created E-Commerce website selling fruits for a Japanese Farm. (Created both <a href="http://shop.oogushi-farm2.co.jp/">Oogushi Farm</a> and <a href="https://www.gogo-oogushi.com/">Oogushi Farm 2</a>) </li>
							<li><a href="https://walkerkarina.github.io/my_portfolio_v2/#/about"><b>My Portfolio</b></a></li>
							<li><b>Salude</b> — SheHacks U18 First Place Winner 2019. Created an application under the theme of "Empowerment". Presented to Visa Executives and various entrepreneurs.</li>
							<li><b>Online Whiteboard</b> — Enables whiteboard drawings on the web.</li>
							<li><b>Easify NLP</b> — An automated recipe converter using spaCy, an NLP library. Automatic identification of key components in a recipe to enable units conversion. </li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default About;
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
						 {/* <h1 className="subtopic">About Me</h1> */}
						<h1>Karina Walker</h1>
						<br></br>
						<p>
I'm Karina! I'm currently on a gap year, and will soon be attending Harvey Mudd College in California. I recently graduated from UWCSEA Dover (IB school in Singapore).
						</p>
<p>
At Mudd, I plan to study Mathematics and Computer Science. While I’m excited by the intricacy of maths, I get most satisfaction from progressing through complex concepts and problems. I love unearthing the reasoning behind problems and intuitively navigating my way towards solutions.
						</p>
<p> 
Since graduating from high school, I've dived into the world of machine learning. As an avid mathematician, I'm especially curious about machine learning fundamentals and optimizing the implementations of algorithms.
</p>
<p> 
In my spare time, I like to tutor high school students in Mathematics, Science, and Social Studies. I’m particularly proud of one student of mine who—despite having dropped out of school due to language barriers—passed a highly competitive entrance exam for their desired high school program.
</p>
<p> 
As an online tutor, I spend a lot of time writing student reports. So I'm currently working on applying some of the deep learning theory I've read about to automate this process.
</p>


					</div>
					<div className="col col-md-4 col-sm-8">
						<img src={profilePicture} alt="ProfilePicture" className="profilePic img-fluid"></img>
						 {/* <Social /> */}
					</div>
				</div>
				<div className="row row-content">
					<div className="col col-md-8">
						<h3>Current Projects</h3>
						<ul>
							<li><b>Teaching Report</b> — Experimenting with GPT2 for generating student performance comment templates. Implementing GPT2 in browser. </li>
							<li><b>SOS For Haze</b> — Developing a website for SOS For Haze, a Singaporean NGO. To raise awareness on the negative impact haze and deforestation has on the environment.</li>
						</ul>
						<br></br>
						<h3>Past Projects</h3>
						<ul>
							<li><b><a href="https://walkerkarina.github.io/doodle/">Doodle</a></b> — Implementation and creation of CNN model using Doodle's Quick Draw Dataset. Runs in brower using tensorflow.js</li>
							<li><a href="http://shop.oogushi-farm2.co.jp/"><b>Oogushi Farm</b></a> — Re-created E-Commerce website selling fruits for a Japanese Farm. (Created both <a href="http://shop.oogushi-farm2.co.jp/">Oogushi Farm</a> and <a href="https://www.gogo-oogushi.com/">Oogushi Farm 2</a>) </li>
							<li><b>Salude</b> — SheHacks U18 First Place Winner 2019. Created an application under the theme of "Empowerment". Presented to Visa Executives and various entrepreneurs.</li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default About;
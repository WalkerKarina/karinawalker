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
I'm Karina! I'm currently on a gap year, and will soon be attending Harvey Mudd College in California, where I plan to study Mathematics and Computer Science. I graduated, albeit online, from UWCSEA Dover — an international school in Singapore. I enjoy the intricacy of maths as well as the stable and steady progression in complexity. Ultimately I enjoy unearthing the reasoning behind problems and being able to see the final path to a solution. 
						</p>
						<p>
I spent the first two months of my gap year plunging into the ethics of environmental eating as part of my transition to vegetarianism and exploration of veganism. My parents entertained my various recipes where I explored a rainbow of beans and ventured into the realm of ancient grains. The philosophy I developed was the importance to view each change as a choice rather than that I was limiting myself. With this attitude, for every meat product I chose not to consume, I found 2-3 new foods to try and adopt.
</p>
<p>
Since graduating from high school, I've dived into the world of machine learning. As an avid mathematician, I'm especially curious about Principle Component Analysis and optimizing the implementations of algorithms.
						</p>
<p> In my spare time, I like to tutor high school students in Mathematics, Science, and Social Studies. I’ve been touched by their tangible improvements. I had the pleasure of relishing in one of my student’s successes — successfully passing an entrance exam for their desired program. 
</p>
<p> As an online tutor, I spend a lot of time writing student reports. So I'm currently working on applying some of the deep learning theory I've read about to automate parts of the process.
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
							<li><b>Easify NLP</b> — An automated recipe converter using spaCy, an NLP library. Automatic identification of key components in a recipe for units conversion. </li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default About;
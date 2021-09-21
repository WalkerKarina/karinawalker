import React, { Component } from 'react';
import profilePicture from '../images/profile_image.png';
import Footer from '../components/FooterComponent';
import Social from '../components/SocialComponent';

class About extends Component {
	render() {
		return (
			<div className="container">
				<div className="row row-content">
					<div className="col col-md-8 col-sm-12 order-sm-1  ">
						 {/* <h1 className="subtopic">About Me</h1> */}
						<h1>Karina Walker</h1>
						<br></br>
						<p>
Hi, I'm Karina! 
						</p>
<p>
I am a first-year at <a href="https://www.hmc.edu/">Harvey Mudd College</a> in California studying Mathematics and Computer Science. I’m half Japanese, half British and was born and raised in Singapore.						</p>
<p> 
During my 2020-2021 gap year, I worked at <a href="https://www.coinhako.com/">Coinhako</a> as a Software Engineer for 3 months. I took the lead on a project to automate a user subscription service where I created an API and categorized subscribers to streamline operations. I also expanded a backend risk evaluation service and created a user-friendly front-end service to accompany it.
</p>
<p> 
During my year, I also dived into the world of machine learning. I took various courses and created my own projects whilst unearthing the mathematical reasoning behind the computations. 
</p>
<p> 
As an online tutor, I spend a lot of time writing student reports. So I'm currently working on applying some of the deep learning theories I've read about to automate this process.
</p>


					</div>
					<div className="col col-md-4 order-first col-sm-8 order-sm-12 ">
						<img src={profilePicture} alt="ProfilePicture" className="profilePic img-fluid"></img>
						 {/* <Social /> */}
					</div>
				</div>
				<div className="row row-content">
					<div className="col col-md-8">
						<h3>Current Project</h3>
						<ul>
							<li><b>Teaching Report</b> — Experimenting with GPT2 for generating student performance comment templates. Implementing GPT2 in browser. </li>
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
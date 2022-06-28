import React, { Component } from 'react';
import profilePicture from '../images/profile_image.png';
import Footer from '../components/FooterComponent';
import Social from '../components/SocialComponent';

class About extends Component {
	render() {
		return (
			<div className="container">
				<div className="row row-content">
					<div className="col-12 col-md-8">
						<h1>Karina Walker</h1>
						<br></br>
						<p>
Hi, I'm Karina! 
						</p>
<p>
I am a sophomore at <a href="https://www.hmc.edu/">Harvey Mudd College</a> studying Mathematics and Computer Science. I’m half Japanese, half British, and was born and raised in Singapore.						</p>
<p>In the summer of 2022, I joined the PayPal Braintree SDK team as a Software Engineer for three months. Under DevOps, I peer programmed for maintenance and evaluated the automation of SDKs. I also implemented <a href="https://www.github.com/paypal/paypalhttp_java/pull/18">GSON</a> to replace a custom serializer to maximize efficiency.
</p>
<p> 
During my 2020-2021 gap year, I worked at <a href="https://www.coinhako.com/">Coinhako</a> as a Software Engineer for three months. I was the project lead in automating a user subscription service. I created an API client and categorized subscribers to streamline operations. I also expanded a backend risk evaluation service and created a user-friendly front-end service to accompany it.
</p>
<p> 
I also dived into the world of machine learning. I took various courses and created my own projects to unearth the mathematical reasoning behind computations.
</p>



					</div>
					<div className="col-12 col-md-4">
						<img src={profilePicture} alt="ProfilePicture" className="profilePic img-fluid"></img>
						 {/* <Social /> */}
					</div>
				</div>
				<div className="row row-content">
					<div className="col col-md-8">
						<h3>Current Projects</h3>
						<ul>
							<li><b><a href="https://www.thedormdigest.com/">TheDormDigest</a></b> — Co-founded a blog using Webflow to share college lifestyle hacks and experience</li>
						</ul>
						<br></br>
						<h3>Past Projects</h3>
						<ul>
							<li><b>Third Place in West Coast Regional Datathon Fall 2021 by Citadel</b> — Created a report on A/B Testing Preferences For Clickbait Articles.</li>
							<li><b><a href="https://github.com/p-ai-org/p-climate">P-Climate Modeling</a></b> — Applied AI for climate reconstruction using proxy data</li>
							<li><b>Teaching Report</b> — Experimented with GPT2 to generate student performance comment templates. Attempted to implement GPT2 in browser. </li>
							<li><b><a href="https://walkerkarina.github.io/doodle/">Doodle</a></b> — Implementation and creation of CNN model using Doodle's Quick Draw Dataset. Runs in brower using tensorflow.js</li>
							<li><a href="http://shop.oogushi-farm2.co.jp/"><b>Oogushi Farm</b></a> — Re-created E-Commerce website selling fruits for a Japanese Farm. I created both <a href="http://shop.oogushi-farm2.co.jp/">Oogushi Farm</a> and <a href="https://www.gogo-oogushi.com/">Oogushi Farm 2</a>. </li>
							<li><b>Salude</b> — SheHacks U18 First Place Winner 2019. I designed an application under the theme of "Empowerment" and presented my application to Visa Executives and various entrepreneurs. Won first place.</li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default About;

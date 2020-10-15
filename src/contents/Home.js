import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../components/FooterComponent';
import Social from '../components/SocialComponent';
//import profilePicture from '../imgages/profile_image.png';
//<img src={profilePicture} alt="ProfilePicture" className="profilepic"></img>

class Home extends Component {
	render() {
		return (
		<div>
			<div class="social">
				<ReactTypingEffect id="typingText" className="typingeffect" text={['I am Karina Walker','I am a web developer']} speed={100} eraseDelay={700}/>
				<Social />
			</div>
			<Footer/>
		</div>
		)
	}
}
export default Home;
import React, { Component } from 'react'
import profilePicture from '../images/profile_image.png'
import Footer from '../components/FooterComponent'
import Social from '../components/SocialComponent'

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-md-8">
            <h1>Karina Walker</h1>
            <br></br>
            <p>
              I am studying Mathematics and Computer Science with a
              concentration in Environmental Analysis at{' '}
              <a href="https://www.hmc.edu/">Harvey Mudd College</a> class of
              2025.{' '}
            </p>{' '}
            <p>
              I have a keen interest in the intersection between finance and
              technology, particularly in software development and product
              management. I thoroughly enjoy breaking down complex problems into
              manageable pieces and applying a human-centered design approach
              with technology.{' '}
            </p>
            <p>
              Additionally, I am deeply passionate about environmental
              sustainability and actively seek opportunities to contribute
              positively in this area. In my free time, I enjoy reading across
              various genres and constantly seek out new experiences and
              challenges. I’m half Japanese, half British, and was born and
              raised in Singapore.{' '}
            </p>{' '}
            {/*
            <p>
              For twelve weeks in the summer of 2022, I joined PayPal as a
              Software Engineer. As part of Braintree, a PayPal service, I
              practiced pair programming on both the server and web SDK team in
              an Agile environment. I collaborated on implementing a payment
              feature for the JavaScript SDK using Test Driven Development
              including updating the{' '}
              <a href="https://developer.paypal.com/braintree/docs">docs</a>. I
              also spearheaded the implementation of the{' '}
              <a href="https://www.github.com/paypal/paypalhttp_java/pull/18">
                GSON
              </a>{' '}
              library to replace an inefficient custom serializer. After
              investigating integration issues from large merchants, I
              streamlined the help channels service process by identifying user
              pain points and automating the process with a Slack bot.
            </p>
            <p>
              During my 2020-2021 gap year, I worked at{' '}
              <a href="https://www.coinhako.com/">Coinhako</a> as a Software
              Engineer for three months. I was the project lead in automating a
              user subscription service. I created an API client and categorized
              subscribers to streamline operations. I also expanded a backend
              risk evaluation service and created a user-friendly front-end
              service to accompany it. I also dived into the world of machine
              learning. I took various courses and created my own projects to
              unearth the mathematical reasoning behind computations.
	</p> */}
          </div>
          <div className="col-12 col-md-4">
            <img
              src={profilePicture}
              alt="ProfilePicture"
              className="profilePic img-fluid"
            ></img>
            {/* <Social /> */}
          </div>
        </div>
        <div className="row row-content">
          <div className="col col-md-8">
            <h3>
              Current Work on{' '}
              <a href="www.linkedin.com/in/karina-walker-54bb69144">Linkedin</a>
            </h3>
            {/*
            <ul>
              <li>
                <b>
                  <a href="https://www.thedormdigest.com/">thedormdigest</a>
                </b>{' '}
                — Co-founded a blog to share college lifestyle hacks and
                experience with a focus on food.
              </li>
            </ul>
		*/}
            <br></br>
            <h3>Past Projects</h3>
            <ul>
              <li>
                <b>
                  Second Place in Data Open Global Championship Datathon 2022 by
                  Citadel
                </b>{' '}
                — Researched and created a statistical report on a unique topic
                in postsecondary education with three other undergraduate
                students.
              </li>
              <li>
                <b>thedormdigest</b> — Co-founded a blog to share college
                lifestyle hacks and experience with a focus on food.
              </li>
              <li>
                <b>
                  Third Place in West Coast Regional Datathon Fall 2021 by
                  Citadel
                </b>{' '}
                — Created a report on A/B Testing Preferences For Clickbait
                Articles.
              </li>
              <li>
                <b>
                  <a href="https://github.com/p-ai-org/p-climate">
                    P-Climate Modeling
                  </a>
                </b>{' '}
                — Applied AI for climate reconstruction using proxy data.
              </li>
              <li>
                <b>Teaching Report</b> — Experimented with GPT2 to generate
                student performance comment templates. Attempted to implement
                GPT2 in browser.{' '}
              </li>
              <li>
                <b>
                  <a href="https://walkerkarina.github.io/doodle/">Doodle</a>
                </b>{' '}
                — Implementation and creation of CNN model using Doodle's Quick
                Draw Dataset. Runs in brower using tensorflow.js
              </li>
              <li>
                <a href="http://shop.oogushi-farm2.co.jp/">
                  <b>Oogushi Farm</b>
                </a>{' '}
                — Re-created E-Commerce website selling fruits for a Japanese
                Farm. I created both{' '}
                <a href="http://shop.oogushi-farm2.co.jp/">Oogushi Farm</a> and{' '}
                <a href="https://www.gogo-oogushi.com/">Oogushi Farm 2</a>.{' '}
              </li>
              <li>
                <b>Salude</b> — SheHacks U18 First Place Winner 2019. I designed
                an application under the theme of "Empowerment" and presented my
                application to Visa Executives and various entrepreneurs. Won
                first place.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About

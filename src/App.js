import React from 'react';
import './App.css';
import NavBar from './components/NavBarComponent';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//make skills page about CS skills and also everything else (what I'm interested in etc)
//in education page when I click wild-card it should open up and reveal more info

function App() {
	return(
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route path="/education">
					<Education />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBarComponent';
import About from './contents/About';
import Education from './contents/Education';
import Interests from './contents/Interests';
import Contact from './contents/Contact';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//in education page when I click wild-card it should open up and reveal more info

function App() {
	return(
		<Router basename="/">
			<div className="App">
				<NavBar />
				<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route path="/education">
					<Education />
				</Route>
				<Route path="/interests">
					<Interests />
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

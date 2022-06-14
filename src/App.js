import React from 'react';
import './App.css';
import NavBar from './components/NavBarComponent';
import About from './contents/About';
import Education from './contents/Education';
import Interests from './contents/Interests';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return(
		<Router basename="/">
			<div className="App">
				<NavBar />
				<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route path="/interests">
					<Interests />
				</Route>
				{/*<Route path="/education">
					<Education />
				</Route>*/}
				<Route path="/">
					<About />
				</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;

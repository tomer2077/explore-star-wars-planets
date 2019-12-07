import React, { Component, Fragment } from 'react';
import './App.css';
import Planet from './Planet';

class App extends Component {
	constructor() {
		super();
		this.state = {
			planet: {}
		}
	}

	async componentDidMount() {
		const randomNum = Math.floor(Math.random() * 100) + 1;
		let url = 'https://swapi.co/api/planets/' + randomNum;

		try {
			const response = await fetch(url);
			const data = await response.json();
			this.setState({planet: data});
			console.log(this.state.planet);
		} catch (err) {
			console.log('ooooooops', err);
		}
 	 }
	  
	  async wow(event) {
		const randomNum = Math.floor(Math.random() * 100) + 1;
		let url = 'https://swapi.co/api/planets/' + randomNum;

		try {
			const response = await fetch(url);
			const data = await response.json();
			this.setState({planet: data});
			console.log(this.state.planet);
		} catch (err) {
			console.log('ooooooops', err);
		}
	  }
	render() {
		const planetData = this.state.planet;
		const planetDataArray = Object.entries(planetData);
		if (!planetDataArray.length === 2) { return <h1>oops</h1>}
		return !planetDataArray.length ?
		
			<h1>Loading</h1> :
			(
			
			<Fragment>
			<header className='tc'>
				<h1 id="title">Explore The Planets of Star Wars</h1>
			</header>
			
			<main>
			<button className="button-three" onClick={() => this.wow()}>Random Planet</button>
				<Planet currentPlanet={planetData} />
			</main>
			</Fragment>
		);
		}
	}

export default App;

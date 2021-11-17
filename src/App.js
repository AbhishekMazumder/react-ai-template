import React from 'react';
import {
	Header,
	Footer,
	Blog,
	Features,
	About,
	Possibility,
} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<About />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;

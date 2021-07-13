import React from 'react';
import { About } from './components/about/About';
import { Artists } from './components/artists/Artists';
import { Gallery } from './components/gallery/Gallery';
import { Home } from './components/home/Home';
import { Footer } from './components/Footer';
import './styles/main.sass';
function App() {
	return (
		<div className="App">
			<Home />
			<Gallery />
			<Artists />
			<About />
			<Footer />
		</div>
	);
}

export default App;

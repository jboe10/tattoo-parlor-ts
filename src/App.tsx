import React from 'react';
import { About } from './components/about/About';
import { Gallery } from './components/gallery/Gallery';
import { Home } from './components/home/Home';
import './styles/main.sass';
function App() {
  return (
    <div className="App">
      <Home/>
      <Gallery/>
      <About/>
    </div>
  );
}

export default App;

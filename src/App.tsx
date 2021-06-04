import React from 'react';
import { Gallery } from './components/gallery/Gallery';
import { Home } from './components/home/Home';
import logo from './logo.svg';
import './styles/main.sass';
function App() {
  return (
    <div className="App">
      <Home/>
      <Gallery/>
    </div>
  );
}

export default App;

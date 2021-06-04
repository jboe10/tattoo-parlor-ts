import React from 'react';
import { Gallery } from './components/sections/Gallery';
import { Home } from './components/sections/Home';
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

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeightThing from './HeightThing';
import TallMachine from './TallMachine';

function App() {
  const [height, setHeight] = useState(100);

  const handleChange = (e) => {
    console.log(e);
    setHeight(e.target.value);
  }

  return (
    <div className="App">
      <div className="Left">
      <header className="App-header">
        <h1>H.F.T. <small>How Freaking Tall?</small></h1>
        <HeightThing />

        <input type="range" name="heightSlider" min="0" max="1500" onChange={ handleChange } value={height} />
      </header>
      </div>
      <div className="Right">
        <TallMachine height={height} />
      </div>
    </div>
  );
}

export default App;

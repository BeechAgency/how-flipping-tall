import React, { useState } from 'react';
import './App.css';
import HeightThing from './HeightThing';
import TallMachine from './TallMachine';

function App() {
  const [height, setHeight] = useState(10);

  const handleChange = (e) => {
    setHeight(e.target.value);
  }

  return (
    <div className="App">
      <div className="Right">
        <TallMachine height={height} />
      </div>
      <div className="Left">
        <header className="App-header">
          <h1>H.F.T <small>How Freaking Tall?</small></h1>
          <HeightThing />

          <input type="range" name="heightSlider" min="0" max="150" onChange={ handleChange } value={height} />
        </header>
      </div>
      
    </div>
  );
}

export default App;

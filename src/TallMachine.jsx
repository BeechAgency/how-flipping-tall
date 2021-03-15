import React from 'react';

function TallMachine( { height = 100} ) {
  
    return (
        <div style={ { height: height + "px" } } className="heightBlock">
            <span className="heightTeller">{height}px</span>
        </div>
    );
  }
  
  export default TallMachine;
  
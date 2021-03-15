import React, { useEffect, useState } from 'react';

function HeightThing() {
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setInnerHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  
    return (
        <p>
            Total Height: <b>{innerHeight}</b>
        </p>
    );
  }
  
  export default HeightThing;
  
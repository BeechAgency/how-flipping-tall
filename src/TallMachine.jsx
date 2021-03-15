import React, { useState, useEffect, useRef } from 'react';

function TallMachine( { height = 10} ) {
    const [heightPx, setHeightPx] = useState(0)
    const ref = useRef(null)
    
    useEffect(() => {
        setHeightPx(ref.current.clientHeight)
      }, [])

    return (
        <div style={ { height: height + "vh" } } className="heightBlock" ref={ref}>
            <span className="heightTeller">
                {height}vh<br />
                <span>{heightPx}px</span>
            
            </span>
        </div>
    );
  }
  
  export default TallMachine;
  
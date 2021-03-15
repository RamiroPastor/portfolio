/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from "react";


export function LandingClaimer(props) {

  const [showClaimer, setShowClaimer] = useState(true);
  
  return(
    showClaimer && 
    <div className="LandingClaimer__outer">
      <div className="LandingClaimer">
        <h2 className="LandingClaimer__title">Claimer:</h2>
        <p className="LandingClaimer__intro">
          Ramiro Pastor Martín (the "Author") claims that everything in this personal portfolio (the "Site") 
          is a result of his own creativity, design, work, and testing (except all the logos and fonts). 
          Including, but not limited to:
        </p>
        <ul className="LandingClaimer__list">
          <li>All the background mosaics</li>
          <li>The five (5) svg icons in the nav</li>
          <li>All the animations and transitions</li>
          <li>The layout</li>
        </ul>
        <p className="LandingClaimer__midtro">
          Furthermore, except previous written consent from the Author, you are strictly prohibited from 
          copying, reproducing, modifying or distributing any of the contents or the source code of the Site. 
        </p>
        <p className="LandingClaimer__outro">
          Finally, the Author does not claim that the Site follows the mainstream criteria neither for 
          color balancing and sobriety, nor for lack of variety in font usage.
        </p>
        <p className="LandingClaimer__cookies">
          The Site uses exactly one (1) cookie.
        </p>
        <button 
          className="LandingClaimer__button"
          onClick={() => setShowClaimer(false)}
          >ok</button>
      </div>
    </div>
  )
}


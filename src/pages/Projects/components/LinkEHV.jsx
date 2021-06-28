import React from "react";

import ehvLogo from "../../../assets/img/ehvLogoWhite.png";



export function LinkEHV(props) {

  const ehvImg = 
    <img alt="Egipto Historia Viva" src={ehvLogo}/>

  return(
    <a className="LinkEHV" href="https://ehv.netlify.app">
      <div className="LinkEHV__side LinkEHV__side--left"> {ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--front">{ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--right">{ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--back"> {ehvImg}</div>
    </a>
  )
}
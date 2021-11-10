import React from "react";

import ehvLogo from "../../../assets/img/ehvLogoWhite.png";



export function LinkEHV(props) {

  const ehvImg = 
    <img alt="Egipto Historia Viva" src={ehvLogo}/>

  return(
    <a className="LinkEHV" href="https://home-5005749472.app-ionos.space" target="_blank" rel="noreferrer">
      <div className="LinkEHV__side LinkEHV__side--left"> {ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--front">{ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--right">{ehvImg}</div>
      <div className="LinkEHV__side LinkEHV__side--back"> {ehvImg}</div>
    </a>
  )
}
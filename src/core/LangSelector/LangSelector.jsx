
import React           from "react";
import { useLocation } from "react-router-dom";

import flagEs from "../../assets/img/flagSpain.svg";
import flagEn from "../../assets/img/flagUk.svg";


export function LangSelector(props) {

  const location = useLocation();

  let showLangSelector = true;

  if (location.pathname === "/") {
    showLangSelector = false;
  }

  

  return(
    showLangSelector && 
    <div className="LangSelector">
      <div className="LangSelector__main">
        <button className="LangSelector__button" onClick={() => props.fnSetLang("es")}>
          <img alt="español" src={flagEs}/>
        </button>
        <button className="LangSelector__button" onClick={() => props.fnSetLang("en")}>
          <img alt="english" src={flagEn}/>
        </button>
      </div>
    </div>
  )
}
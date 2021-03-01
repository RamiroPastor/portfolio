
import React from "react";

import { envelopeSvg } from "../../assets/svg/envelope";
import { Nav } from "../../core/Nav/Nav";



export function Contact(props) {
  
  return(
    <div className="Contact">
      <div className="Contact__background Contact__background--left"></div>
      <div className="Contact__background Contact__background--right"></div>
      <div className="Contact__foreground">
        <Nav t={props.t}/>
        <div className="Contact__main">
          <h1 className="Contact__title">{props.t("contact")}</h1>
          <a className="Contact__email" href={"mailto:" + process.env.REACT_APP_MYEMAIL}>
            {envelopeSvg}
            {process.env.REACT_APP_MYEMAIL}
          </a>
        </div>
      </div>
    </div>
  )
}
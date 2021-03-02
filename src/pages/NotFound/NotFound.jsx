
import React from "react";


import { Nav } from "../../core/Nav/Nav";


export function NotFound(props) {
  
  return(
    <div className="NotFound__background">
      <Nav t={props.t}/>
      <div className="NotFound">
        <h1 className="NotFound__title">4o4</h1>
        <h2 className="NotFound__subtitle">{props.t("notFound")}</h2>
        <h3 className="NotFound__content">{props.t("hordesOfHell")}</h3>
      </div>
    </div>
  )
}
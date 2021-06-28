
import React from "react";

import { Nav } from "../../core/Nav/Nav";
import { LinkEHV } from "./components/LinkEHV";



export function Projects(props) {
  
  return(
    <div className="Projects">
      <div className="Projects__foreground">
        <Nav t={props.t}/>
        <LinkEHV/>
      </div>
    </div>
  )
}
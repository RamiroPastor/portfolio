
import React from "react";
import { NavLink } from "react-router-dom";

import { bookSvg     } from "../../assets/svg/book.jsx";
import { carnetSvg   } from "../../assets/svg/carnet.jsx";
import { envelopeSvg } from "../../assets/svg/envelope.jsx";
import { homeSvg     } from "../../assets/svg/home.jsx";
import { jobSvg      } from "../../assets/svg/job.jsx";


export function Nav(props) {
  
  return(
    <nav className="Nav">

      <NavLink className="Nav__link" activeClassName="Nav__link--active" to="/home">
        {homeSvg}
        <span className="Nav__linkText">home</span>
      </NavLink>

      <NavLink className="Nav__link" activeClassName="Nav__link--active" to="/learning">
        {bookSvg}
        <span className="Nav__linkText">learning</span>
      </NavLink>

      <NavLink className="Nav__link" activeClassName="Nav__link--active" to="/projects">
        {jobSvg}
        <span className="Nav__linkText">projects</span>
      </NavLink>

      <NavLink className="Nav__link" activeClassName="Nav__link--active" to="/cv" target="_blank">
        {carnetSvg}
        <span className="Nav__linkText">curriculum</span>
      </NavLink>

      <NavLink className="Nav__link" activeClassName="Nav__link--active" to="/contact">
        {envelopeSvg}
        <span className="Nav__linkText">contact</span>
      </NavLink>

    </nav>
  )
}
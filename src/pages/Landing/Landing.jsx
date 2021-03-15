
import React from "react";
import { Link } from "react-router-dom";

import { LandingBackground } from "./LandingBackground/LandingBackground";
import { LandingClaimer }    from "./LandingClaimer/LandingClaimer";
import { LandingForeground } from "./LandingForeground/LandingForeground";


const s = 0;       // stroke width for central hexagon
const r = 0.5 - s    
const cos30 = Math.cos(Math.PI / 6);
const sin30 = Math.sin(Math.PI / 6);

export function Landing(props) {
  
  return(
    <div className="Landing">
      <LandingBackground/>
      <LandingForeground/>
      <LandingClaimer/>
      <div className="Landing__main">

        <svg className="Landing__myname" viewBox="0 0 100 100">
          <defs>
            <path 
              id="landing-myname-topcurve" 
              d= "M 12 50   A 40 40 0 0 1 88 50"
              />
            <path
              id="landing-myname-botcurve"
              d= "M 10 50   A 40 40 0 0 0 90 50"
            />
            <linearGradient id="landing-myname-topcurve-gradient">
              <stop offset="5%"  stopColor="#FF4E50"/>
              <stop offset="50%" stopColor="#F9D423"/>
              <stop offset="95%" stopColor="#FF4E50"/>
            </linearGradient>
            <linearGradient id="landing-myname-botcurve-gradient">
              <stop offset="5%"  stopColor="#FF4E50"/>
              <stop offset="35%" stopColor="#F9D423"/>
              <stop offset="65%" stopColor="#F9D423"/>
              <stop offset="95%" stopColor="#FF4E50"/>
            </linearGradient>
          </defs>
          <text textAnchor="middle">
            <textPath xlinkHref="#landing-myname-topcurve" startOffset="50%">
              Ramiro
            </textPath>
            <textPath xlinkHref="#landing-myname-botcurve" startOffset="50%" className="Landing__myname--surname">
              Pastor Martin
            </textPath>
          </text>
        </svg>

        <Link to="/home" className="Landing__linkToHome">
          <svg viewBox="0 0 1 1" preserveAspectRatio="xMinYMin meet">
            <defs>
              <path
                id="hexagon-right-side"
                strokeWidth="0"
                d= {`
                  M  0.5                 0
                  L  0.5               ${s}
                  L  ${0.5 + r*cos30}  ${0.5 - r*sin30}
                  L  ${0.5 + r*cos30}  ${0.5 + r*sin30}
                  L  0.5               ${1 - s}
                  L  0.5                 1
                  L  1                   1
                  L  1                   0
                  z
                `}
              />
            </defs>
            <use xlinkHref="#hexagon-right-side" fill="white"/>
            <use xlinkHref="#hexagon-right-side" fill="white" transform="rotate(180 0.5 0.5)"/>
            <path
              fill="transparent"
              stroke="blue"
              strokeWidth={s}
              strokeLinejoin="round"
              d= {`
                M  0.5               ${s}
                L  ${0.5 + r*cos30}  ${0.5 - r*sin30}
                L  ${0.5 + r*cos30}  ${0.5 + r*sin30}
                L  0.5               ${1 - s}
                L  ${0.5 - r*cos30}  ${0.5 + r*sin30}
                L  ${0.5 - r*cos30}  ${0.5 - r*sin30}
                z
              `}
            />
            <text x="0.5" y="0.5" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="central">
              enter
            </text>
          </svg>
        </Link>

      </div>
    </div>
  )
}

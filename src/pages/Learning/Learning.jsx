
import React from "react";

import { Nav } from "../../core/Nav/Nav";



export function Learning(props) {

  function learningSection(cls, name, desc, url) {

    return(
      <section className={"Learning__project " + cls}>
        <div className="Learning__projectInfoWrap">
          <div className={"Learning__projectInfo"}>
            <h3 className="Learning__projectName">{name}</h3>
            <p>{desc}</p>
          </div>
        </div>
        <div className="Learning__projectLinkWrap">
          <a target="_blank" rel="noreferrer" href={url} className="Learning__projectLink">
            <span className="Learning__projectLinkButton">
              {props.t("go")}
            </span>
          </a>
        </div>
      </section>  
  )}
  
  return(
    <div className="Learning">
      <div className="Learning__foreground">
        <Nav t={props.t}/>
        <article className="Learning__main">
          {learningSection(
            "Learning__project--got",
            "GoT",
            props.t("projectGoT"),
            "https://juego-de-tronos.netlify.app"
          )}
          {learningSection(
            "Learning__project--shopeame",
            "Shopéame",
            props.t("projectShopeame"),
            "https://shopeame.netlify.app"
          )}
          {learningSection(
            "Learning__project--trivial",
            "Trivial",
            props.t("projectTrivial"),
            "https://el-juego-de-las-preguntas.netlify.app"
          )}
          {learningSection(
            "Learning__project--rpg",
            "RPG",
            props.t("projectRPG"),
            "https://ramiropastor-rpg.netlify.app"
          )}
        </article>
      </div>
    </div>
  )
}



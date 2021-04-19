
import React from "react";

import greenTickUrl from "../../assets/img/greenTick.svg";
import redCrossUrl  from "../../assets/img/redX.svg";
import { Nav }      from "../../core/Nav/Nav";


const greenTick = <img alt="ok" src={greenTickUrl}/>
const redCross  = <img alt="ko" src={redCrossUrl}/> 


export function Home(props) {
  
  return(
    <div className="Home">
      <div className="Home__background">
        <div className="Home__foreground">

          <main className="HomeMain">

            <h3 className="HomeMain__subtitle">
              {props.t("welcome")}
            </h3>
            <h1 className="HomeMain__title">
              Ramiro Pastor Martín
            </h1>

            <article className="HomeMain__content">
              <section className="HomeMain__description">
                <p>{props.t("imNice")}</p>
                <p>{props.t("imLazy")}</p>
                <i>
                  {props.t("jokeLine1")}
                  <br/>
                  {props.t("jokeLine2")}
                </i>
              </section>
              <section className="HomeMain__likesAndDislikes">
                <div className="HomeMain__likes">
                  <h5>{props.t("likes")}</h5>
                  <ul>
                    <li>{greenTick} {props.t("games")}</li>
                    <li>{greenTick} {props.t("youtubeVideos")}</li>
                    <li>{greenTick} {props.t("music")}</li>
                    <li>{greenTick} {props.t("sleepAndEat")}</li>
                  </ul>
                </div>
                <div className="HomeMain__dislikes">
                  <h5>{props.t("dislikes")}</h5>
                  <ul>
                    <li>{redCross} {props.t("socialMedia")}</li>
                    <li>{redCross} {props.t("manipulativePeople")}</li>
                    <li>{redCross} {props.t("tv")}</li>
                    <li>{redCross} {props.t("advertising")}</li>
                  </ul>
                </div>
              </section>
            </article>

          </main>

          <Nav t={props.t}/>

        </div>
      </div>
    </div>
  )
}
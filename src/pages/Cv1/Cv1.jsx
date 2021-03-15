
import React, { useState } from "react";


import cambridgeImgUrl      from "../../assets/cv/cambridge.svg";
import emailImgUrl          from "../../assets/cv/email.svg";
import langEnImgUrl         from "../../assets/cv/langEN.png";
import langEsImgUrl         from "../../assets/cv/langES.png";
import langFrImgUrl         from "../../assets/cv/langFR.svg";
import locationImgUrl       from "../../assets/cv/location.svg";
import myPhotoImgUrl        from "../../assets/cv/MyPhoto.jpg";
import skillAngularImgUrl   from "../../assets/cv/skillAngular.png";
import skillCssImgUrl       from "../../assets/cv/skillCss.png";
import skillDockerImgUrl    from "../../assets/cv/skillDocker.png";
import skillGitImgUrl       from "../../assets/cv/skillGit.png";
import skillHaskellImgUrl   from "../../assets/cv/skillHaskell.png";
import skillHtmlImgUrl      from "../../assets/cv/skillHtml.png";
import skillJsImgUrl        from "../../assets/cv/skillJavascript.svg";
import skillMatlabImgUrl    from "../../assets/cv/skillMatlab.png";
import skillMongoImgUrl     from "../../assets/cv/skillMongo.png";
import skillMysqlImgUrl     from "../../assets/cv/skillMysql.png";
import skillNodejsImgUrl    from "../../assets/cv/skillNodejs.png";
import skillPythonImgUrl    from "../../assets/cv/skillPython.png";
import skillReactImgUrl     from "../../assets/cv/skillReact.png";
import skillSvgImgUrl       from "../../assets/cv/skillSvg.png";
import skillTopologyImgUrl  from "../../assets/cv/skillTopologia.png";
import socialGithubImgUrl   from "../../assets/cv/socialGithub.png";
import socialGitlabImgUrl   from "../../assets/cv/socialGitlab.png";
import socialLinkedinImgUrl from "../../assets/cv/socialLinkedin.png";
import socialSoImgUrl       from "../../assets/cv/socialStackoverflow.png";
import stmichaelsImgUrl     from "../../assets/cv/stmichaels.png";
import ucmImgUrl            from "../../assets/cv/ucm.png";
import upgradehubImgUrl     from "../../assets/cv/upgradehub.png";
import utretchImgUrl        from "../../assets/cv/utretch.png";
import webImgUrl            from "../../assets/cv/web.svg";
import whatsappImgUrl       from "../../assets/cv/whatsapp.svg";

import { Nav } from "../../core/Nav/Nav";


const cambridgeImg      = <img alt="" title=""                 src={cambridgeImgUrl}/>;
const emailImg          = <img alt="" title="Email"            src={emailImgUrl}/>;
const langEnImg         = <img alt="" title=""                 src={langEnImgUrl}/>;
const langEsImg         = <img alt="" title=""                 src={langEsImgUrl}/>;
const langFrImg         = <img alt="" title=""                 src={langFrImgUrl}/>;
const locationImg       = <img alt="" title="Location"         src={locationImgUrl}/>;
const myPhotoImg        = <img alt="" className="Cv1__myPhoto" src={myPhotoImgUrl}/>;
const skillAngularImg   = <img alt="" title=""                 src={skillAngularImgUrl}/>;
const skillCssImg       = <img alt="" title=""                 src={skillCssImgUrl}/>;
const skillDockerImg    = <img alt="" title=""                 src={skillDockerImgUrl}/>;
const skillGitImg       = <img alt="" title=""                 src={skillGitImgUrl}/>;
const skillHaskellImg   = <img alt="" title=""                 src={skillHaskellImgUrl}/>;
const skillHtmlImg      = <img alt="" title=""                 src={skillHtmlImgUrl}/>;
const skillJsImg        = <img alt="" title=""                 src={skillJsImgUrl}/>;
const skillMatlabImg    = <img alt="" title=""                 src={skillMatlabImgUrl}/>;
const skillMongoImg     = <img alt="" title=""                 src={skillMongoImgUrl}/>;
const skillMysqlImg     = <img alt="" title=""                 src={skillMysqlImgUrl}/>;
const skillNodejsImg    = <img alt="" title=""                 src={skillNodejsImgUrl}/>;
const skillPythonImg    = <img alt="" title=""                 src={skillPythonImgUrl}/>;
const skillReactImg     = <img alt="" title=""                 src={skillReactImgUrl}/>;
const skillSvgImg       = <img alt="" title=""                 src={skillSvgImgUrl}/>;
const skillTopologyImg  = <img alt="" title=""                 src={skillTopologyImgUrl}/>;
const socialGithubImg   = <img alt="" title=""                 src={socialGithubImgUrl}/>;
const socialGitlabImg   = <img alt="" title=""                 src={socialGitlabImgUrl}/>;
const socialLinkedinImg = <img alt="" title=""                 src={socialLinkedinImgUrl}/>;
const socialSoImg       = <img alt="" title=""                 src={socialSoImgUrl}/>;
const stmichaelsImg     = <img alt="" title=""                 src={stmichaelsImgUrl}/>;
const ucmImg            = <img alt="" title=""                 src={ucmImgUrl}/>;
const upgradehubImg     = <img alt="" title=""                 src={upgradehubImgUrl}/>;
const utretchImg        = <img alt="" title=""                 src={utretchImgUrl}/>;
const webImg            = <img alt="" title="Personal site"    src={webImgUrl}/>;
const whatsappImg       = <img alt="" title="Phone number"     src={whatsappImgUrl}/>;



function studies(img$$, info, dates, entity) {

  return(
    <div className="Cv1__study">
      {img$$}
      <div className="Cv1__studyInfo">
          <div>
              <h4>{info}</h4>
              <span>{dates}</span>
          </div>
          <p>{entity}</p>
      </div>
    </div>
  )
}


function work(heading, dates, location, info) {

  return(
    <div className="Cv1__workInfo">
        <div>
            <h4>{heading}</h4>
            <span>{dates}</span>
        </div>
        <em>{location}</em>
        <p>{info}</p>
    </div>
  )
}


function skill(img$$, name, level) {

  let stars = "";
  switch (level) {
    case 1:
      stars = <em className="Cv1__lowSkill"   >★☆☆☆☆</em>; break;
    case 2:
      stars = <em className="Cv1__mediumSkill">★★☆☆☆</em>; break;
    case 3:
      stars = <em className="Cv1__mediumSkill">★★★☆☆</em>; break;
    case 4:
      stars = <em className="Cv1__highSkill"  >★★★★☆</em>; break;
    default:
      stars = <em className="Cv1__highSkill"  >★★★★★</em>; break;
  }

  return(
    <li>
      {img$$}
      <span>{name}</span>
      {stars}
    </li>
  )
}


function language(img$$, lang, level) {

  return(
    <li>
      {img$$}
      <div>
        <span>{lang}</span>
        <p>{level}</p>
      </div>
    </li>
  )
}


function social(img$$, platform, url) {

  return(
    <li>
      <a target="_blank" rel="noreferrer" href={url}>
        {img$$}
      </a>
    </li>
  )
}



export function Cv1(props) {

  const [showPhone, setShowPhone] = useState(false);
  
  return(
    <div className="Cv1__background">
    <div className="Cv1__foreground">

      <Nav t={props.t}/>

      <article className="Cv1">
        
        <section className="Cv1__header">
          <div className="Cv1__myPhotoWrapper">{myPhotoImg}</div>
          <div className="Cv1__personal">
            <div className="Cv1__personalDescription">
              <h1>Ramiro Pastor Martín</h1>
              <h5>
                {props.t("cvDesc1")}
                <br/>
                {props.t("cvDesc2")}
              </h5>
            </div>
            <div className="Cv1__personalInfoWrapper">
              <a className="Cv1__personalInfo" href={"mailto:" + process.env.REACT_APP_MYEMAIL}>
                  {emailImg}
                  <span>{process.env.REACT_APP_MYEMAIL}</span>
              </a>
              <div className="Cv1__personalInfo">
                  {whatsappImg}
                  <span>
                    { showPhone 
                      ? process.env.REACT_APP_MYPHONE
                      : <button onClick={() => setShowPhone(true)}>show</button>
                    }
                  </span>
              </div>
              <div className="Cv1__personalInfo">
                  {locationImg}
                  <span>{props.t("cvLocation")}</span>
              </div>
              <a className="Cv1__personalInfo" href="https://ramiropastor.es">
                  {webImg}
                  <span>https://ramiropastor.es</span>
              </a>
            </div>
          </div>
        </section>

        <section className="Cv1__body">

          <aside className="Cv1__sidebar">
            <div className="Cv1__social">
              <h3 className="Cv1__sectionHeader">{props.t("social")}</h3>
              <ul className="Cv1__socialList">
                {social(socialSoImg      , "Stackoverflow", "https://stackoverflow.com/users/3927886"                    )}
                {social(socialGithubImg  , "Github"       , "https://github.com/RamiroPastor"                            )}
                {social(socialGitlabImg  , "Gitlab"       , "https://gitlab.com/Moch"                                    )}
                {social(socialLinkedinImg, "LinkedIn"     , "https://www.linkedin.com/in/ramiro-pastor-martin-2a4187125/")}
              </ul>
            </div>
            <div className="Cv1__langs">
              <h3 className="Cv1__sectionHeader">{props.t("languages")}</h3>
              <ul className="Cv1__langList">
                {language(langEsImg, props.t("spanish"), props.t("native"))}
                {language(langEnImg, props.t("english"), props.t("professional"))}
                {language(langFrImg, props.t("french") , props.t("beginner"))}
              </ul>
            </div>
            <div className="Cv1__skills">
              <h3 className="Cv1__sectionHeader">{props.t("skills")}</h3>
              <ul className="Cv1__skillList">
                {skill(skillTopologyImg, props.t("topology") , 4)}
                {skill(skillHaskellImg , "Haskell"           , 3)}
                {skill(skillPythonImg  , "Python"            , 2)}
                {skill(skillMatlabImg  , "Matlab"            , 1)}
                {skill(skillHtmlImg    , "HTML"              , 4)}
                {skill(skillCssImg     , "Css"               , 5)}
                {skill(skillSvgImg     , "SVG"               , 4)}
                {skill(skillJsImg      , "Javascript"        , 4)}
                {skill(skillAngularImg , "Angular"           , 1)}
                {skill(skillReactImg   , "React"             , 3)}
                {skill(skillNodejsImg  , "Nodejs"            , 3)}
                {skill(skillGitImg     , "Git"               , 2)}
                {skill(skillDockerImg  , "Docker"            , 3)}
                {skill(skillMysqlImg   , "Mysql + PostgreSQL", 1)}
                {skill(skillMongoImg   , "MongoDB"           , 3)}
              </ul>
            </div>
          </aside>

          <main className="Cv1__main">
            <section className="Cv1__studies">
              <h3 className="Cv1__sectionHeader">{props.t("studies")}</h3>
              {studies(
                upgradehubImg,
                props.t("bootcamp"),
                "2020 - 2021",
                "Upgrade Hub"
              )}
              {studies(
                utretchImg,
                "Applied Functional Programming in Haskell",
                "agosto 2017",
                props.t("utretchUni")
              )}
              {studies(
                ucmImg,
                props.t("mathsDegree"),
                "2008 - 2017",
                "Universidad Complutense de Madrid"
              )}
              {studies(
                cambridgeImg,
                "Certificate of Proficiency in English",
                "2007 - 2008",
                "Cambridge University"
              )}
              {studies(
                stmichaelsImg,
                props.t("basicEducation"),
                "1996 - 2008",
                props.t("stMichaels")
              )}
            </section>

            <section className="Cv1__work">
              <h3 className="Cv1__sectionHeader">{props.t("workExperience")}</h3>
              {work(
                props.t("workExp2_title"),
                "2017",
                "Pickmister.com",
                props.t("workExp2_desc")
              )}
              {work(
                props.t("workExp1_title"),
                "2010 - 2012",
                props.t("workExp1_location"),
                props.t("workExp1_desc")
              )}
            </section>
          </main>

        </section>

      </article>
    </div>
    </div>
  )
}


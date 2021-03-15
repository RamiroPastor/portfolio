
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Contact  } from "../../pages/Contact/Contact";
import { Cv       } from "../../pages/Cv/Cv";
import { Cv1      } from "../../pages/Cv1/Cv1";
import { Home     } from "../../pages/Home/Home";
import { Landing  } from "../../pages/Landing/Landing";
import { Learning } from "../../pages/Learning/Learning";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Projects } from "../../pages/Projects/Projects";


export function Routes(props) {

  return(
    <Switch>

      <Route path="/home">
        <Home t={props.t}/>
      </Route>

      <Route path="/learning">
        <Learning t={props.t}/>
      </Route>

      <Route path="/projects">
        <Projects t={props.t}/>
      </Route>

      <Route path="/cv">
        <Cv t={props.t}/>
      </Route>

      <Route path="/cv1">
        <Cv1 t={props.t}/>
      </Route>

      <Route path="/contact">
        <Contact t={props.t}/>
      </Route>

      <Route path="/" exact>
        <Landing/>
      </Route>

      <Route path="/">
        <NotFound t={props.t}/>
      </Route>

    </Switch>
  )
}
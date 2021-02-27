
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Contact  } from "../../pages/Contact/Contact";
import { Cv       } from "../../pages/Cv/Cv";
import { Landing  } from "../../pages/Landing/Landing";
import { Learning } from "../../pages/Learning/Learning";
import { Projects } from "../../pages/Projects/Projects";
import { Home     } from "../../pages/Home/Home";
import { Wip      } from "../../pages/Wip/Wip";


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

      <Route path="/contact">
        <Contact t={props.t}/>
      </Route>

      <Route path="/" exact>
        <Landing/>
      </Route>

      <Route path="/">
        <Wip/>
      </Route>

    </Switch>
  )
}
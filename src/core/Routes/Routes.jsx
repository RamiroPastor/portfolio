
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Contact  } from "../../pages/Contact/Contact";
import { Cv       } from "../../pages/Cv/Cv";
import { Landing  } from "../../pages/Landing/Landing";
import { Projects } from "../../pages/Projects/Projects";
import { Home     } from "../../pages/Home/Home";
import { Wip      } from "../../pages/Wip/Wip";


export function Routes(props) {

  return(
    <Switch>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/learning">
        <Wip />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/cv">
        <Cv />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/">
        <Wip/>
      </Route>

    </Switch>
  )
}

import React from "react";
import { Route, Switch } from "react-router-dom";

import { Landing } from "../../pages/Landing/Landing";
import { Home    } from "../../pages/Home/Home";
import { Wip     } from "../../pages/Wip/Wip";


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
        <Wip />
      </Route>

      <Route path="/cv">
        <Wip />
      </Route>

      <Route path="/contact">
        <Wip />
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
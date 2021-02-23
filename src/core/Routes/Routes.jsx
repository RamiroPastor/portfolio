
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Landing } from "../../pages/Landing/Landing";
import { Home    } from "../../pages/Home/Home";


export function Routes(props) {

  return(
    <Switch>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/">
        <Landing />
      </Route>

    </Switch>
  )
}
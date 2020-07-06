import React, { useEffect } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";

import Models from "./Index";
import Ecology from "./ecology/Index";
import HumanSociety from "./human-society/Index";
import Population from "./population/Index";
import Services from "./services/Index";
import Transport from "./transport/Index";

function ModelsRouter() {
    return (
    <Switch>
      <Route exact path="/models" component={Models} />
      <Route path="/models/ecology" component={Ecology} />
      <Route path="/models/human-society" component={HumanSociety} />
      <Route path="/models/population" component={Population} />
      <Route path="/models/services" component={Services} />
      <Route path="/models/transport" component={Transport} />
    </Switch>
    );
}
export default ModelsRouter;
import React from "react";
import { Route } from "react-router-dom";

import Home from './components/home/homepage';
import Techies from './components/techies';
import Technologies from './components/technologies';
import BuildDevelopmentTeam from './components/buildTeam/buildDevelopmentTeam';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/techies" component={Techies} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/build-development-team" component={BuildDevelopmentTeam} />
    </div>
  )
}

export default Routes;
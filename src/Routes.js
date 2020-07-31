import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as pageRoutes from "./pageRoutes";

const ProfilePage = lazy(() => import("./components/ProfilePage"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={pageRoutes.profilePage} component={ProfilePage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;

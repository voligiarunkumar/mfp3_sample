
import {Router, Route, Switch, BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserHistory } from "history";

import {
    StylesProvider,
    createGenerateClassName,
  } from "@material-ui/core/styles";
const history = createBrowserHistory();
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const VtraceLazy= lazy(() => import("./components/Vtrace"));
const Routes = () => {
    const [issignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (issignedIn) {
      history.push("/Dashboard");
    }
  }, [issignedIn]);
    return (
        <Router history={history}>
      <StylesProvider>
        <div>
          <Suspense fallback={<div>Laoding....</div>}>
            <Switch>
              <Route path="/auth/signin">
                <AuthAppLazy ></AuthAppLazy>
              </Route>
              <Route path="/marketing" component={MarketingLazy}></Route>
              <Route path="/vtrace" component={VtraceLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
    
        );
};

export default Routes;

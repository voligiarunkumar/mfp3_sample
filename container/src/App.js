import React, { lazy, Suspense, useState, useEffect } from "react";

import Header from "./components/Header";

import {
  SDivider,
  SLink,
  SLinkContainer,
  SSidebar,
} from "./styles";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Link, useLocation } from "react-router-dom";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const VtraceLazy = lazy(() => import("./components/Vtrace"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});
const history = createBrowserHistory();


export default () => {
  const [issignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (issignedIn) {
      history.push("/Dashboard");
    }
  }, [issignedIn]);
  const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { pathname } = useLocation();
    return (
      <SSidebar isOpen={sidebarOpen}>
        <SDivider />
        {linksArray.map(({label, to }) => (
          <div key={label} >
            <Link to={to}>
              <ul>{label}</ul>
            </Link>
          </div>
        ))}
        <SDivider />
      </SSidebar>
    );
  };
  
  const linksArray = [
    {
      label: "Home",
  
      to: "/marketing",
    },
    {
      label: "shipping",
  
      to: "/auth/signin",
    },
    {
      label: "sharedata",
  
      to: "/shareddata",
    },
    {
      label: "vtrace",
  
      to: "/vtrace",
    },
  ];
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={issignedIn}
          ></Header>
          <table></table>
          <Sidebar></Sidebar>
          <Suspense fallback={<div>Laoding....</div>}>
            <Switch>
              <Route path="/vtrace" component={VtraceLazy}></Route>
              <Route path="/auth/signin">
                <AuthAppLazy />
              </Route>
              <Route path="/marketing" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

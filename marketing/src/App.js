import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Landing from "./components/Landing";
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});
export default ({ history }) => {
  return <div><Landing></Landing></div>;
};

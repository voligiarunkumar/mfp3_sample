import React from "react";
// import { Switch, Route, Router } from "react-router-dom";
// import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";
import Orders from "./components/orders";
// const generateClassName=createGenerateClassName(
//   {
//     productionPrefix:'ma',
//   }
// );
export default () => {
  return (
    <div>
      {/* <StylesProvider generateClassName={generateClassName}> */}
  
            <Orders> </Orders>
          

      {/* </StylesProvider> */}
    </div>
  );
};

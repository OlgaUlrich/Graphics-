import React from "react";
import { AppMain } from "./AppStyle"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReportMenu from "./graph/ReportsMenu";
import OneChannel from "./graph/OneChannel";
import MultipChannel from "./graph/MultipChannel";
import { GlobalStyle } from "./globalStyle";


import './App.css';

function App() {
  return (
    <>
        <GlobalStyle />
       <Router>
         <AppMain>

       <Switch>
                <Route path="/" component={ReportMenu} exact />
                <Route path="/report" component={OneChannel} exact />
                <Route path="/multi-report" component={MultipChannel} exact />
            </Switch>
       
            </AppMain>
      
      </Router>
    </>
  );
}

export default App;

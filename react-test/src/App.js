import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countries from "./Countries";
import Country from "./Country";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/country">
              <Country />
            </Route>

            <Route path="/">
              <Countries />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

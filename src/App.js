import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import IceCream from "./pages/IceCream";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cakes">
            <Cakes />
          </Route>
          <Route path="/icecream">
            <IceCream />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
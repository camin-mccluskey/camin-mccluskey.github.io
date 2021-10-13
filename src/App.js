import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Article from "./pages/Article";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/thoughts/:id">
          <Article />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

import React from "react";
import './App.scss';
import useDarkMode from './utils/useDarkMode';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Article from "./pages/Article";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>
        <Route path="/thoughts/:id">
          <Article darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

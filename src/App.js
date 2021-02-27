// App.jsx
 
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

import './App.css';
 
function App() {
  return (
    <HashRouter>
        <div>
          <h1>Marco Dalprato</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme">About me</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
          </div>             
        </div>
      </HashRouter>
  );
}
 
export default App;
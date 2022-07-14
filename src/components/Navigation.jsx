import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from './Menu';

function Navigation() {
  return (
      <Router>
        <div>
          <nav className="navbar">
            <ul>
            <li>
            <Link to="/home" className="navlink">Home</Link>
            </li>

            <li>
            <Link to="/login" className="navlink">Admin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/home">
                {/* <Items/> */}
                <Home />
            </Route>
            <Route path="/login">
                {/* <Items/> */}
                <Login />
            </Route>
        </Switch>
        </div>
      </Router>
  )
}

export default Navigation
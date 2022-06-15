import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import ImageUpload from '../pages/ImageUpload';
import Quiz from '../pages/Quiz';

function Navigation() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/imageupload">ImageUpload</Link>
            </li>

            <li>
              <Link to="/quiz">Quiz</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            {/* <Items/> */}
            <Home/>
          </Route>

          <Route path="/imageupload">
            {/* <Items/> */}
            <ImageUpload />
          </Route>

          <Route path="/quiz">
            {/* <Items/> */}
            <Quiz />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
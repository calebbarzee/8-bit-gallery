// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from '../pages/Home';
// import ImageUpload from '../pages/ImageUpload';
// import QuizPage from '../pages/QuizPage';
// import './Navigation.css'

// function Navigation() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar">
//           <ul>
//             <li>
//               <Link to="/home" className="navlink">Home</Link>
//             </li>

//             <li>
//               <Link to="/imageupload" className="navlink">ImageUpload</Link>
//             </li>

//             <li>
//               <Link to="/quizpage" className="navlink">Quiz</Link>
//             </li>

//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/home">
//             {/* <Items/> */}
//             <Home />
//           </Route>

//           <Route path="/imageupload">
//             {/* <Items/> */}
//             <ImageUpload />
//           </Route>

//           <Route path="/quizpage">
//             {/* <Items/> */}
//             <QuizPage />
//           </Route>

//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default Navigation;

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
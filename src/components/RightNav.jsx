import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Router>
        <div>
            <Ul open={open}>
                <li>
                <Link to="/home" className="navlink">Home</Link>
                </li>

                <li>
                <Link to="/login" className="navlink">Admin</Link>
                </li>
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
            </Ul>
        </div>
    </Router>
  )
}

export default RightNav
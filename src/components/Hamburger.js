import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { BrowserRouter as Link } from "react-router-dom";
import Home from '../pages/Home';
import './Navigation.css'

// We set the initial state to false. By default, we want to hide the sidebar navigation. 
// Then, when the menu button is clicked, we can then call the updater function, setNavbarOpen, to update the state.
function Hamburger(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <nav className="navBar">
            {/* Code for button. Line 19-21 is the code for the menu style */}
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ background: "#FFFFFF", color: "#000000", width: "20px", height: "20px" }}></MdClose>
            ) : (
                <MdMenu style={{ background: "#FFFFFF", color: "#000000", width: "20px", height: "20px" }} />
            )}</button>
            
            {/* Navigation in the menu. */}
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li>
                    <Link to="/home" className="navlink">Home</Link>
                </li>
                <li>
                    <Link to='#'>Admin</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Hamburger
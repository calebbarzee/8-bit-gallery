import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { BrowserRouter as Link } from "react-router-dom";
import Home from '../pages/Home';
import './Navigation.css'

function Hamburger(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ background: "#FFFFFF", color: "#000000", width: "20px", height: "20px" }}></MdClose>
            ) : (
                <MdMenu style={{ background: "#FFFFFF", color: "#000000", width: "20px", height: "20px" }} />
            )}</button>
            
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
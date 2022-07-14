import React, { useState } from "react";
import './Menu.css'


function Menu() {
    const [open, setOpen] = useState(false)
  
    return (
        <nav>
            <ul class="navigation responsive">
            <li>
                <img class="menu_button" src="assets/hamburger_menu.png" alt="Hamburger Menu Icon">
            </li>
            <li></li>
            </ul>
        </nav>
    )
}

export default Menu;
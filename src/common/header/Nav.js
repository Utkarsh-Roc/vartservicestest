import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link to="/">Home</Link>
            </li>
            
            <li><Link to="/about-us">About</Link></li>

            <li><Link to="/services">Services</Link></li>

            <li><Link to="/portfolios">Portfolio</Link></li>

            <li><Link to="/animation">Animation</Link></li>

            <li><Link to="/blog">Blog</Link></li>

            
            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;

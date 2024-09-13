import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header () {

    return (
        <>
            <header>
                <h1 className="logo">
                    <Link to='/'>MLSA</Link>
                </h1>
                <nav className="nav">
                    <h4>
                        <NavLink to='/'>Home</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/About'>About</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/ContactUs'>Contact Us</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/Privacy'>Privacy</NavLink>
                    </h4>
                </nav>
            </header>
        </>
    )
}

export default Header;
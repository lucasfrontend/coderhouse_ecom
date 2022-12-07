import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

// import kingdomLogo from '../../assets/logo-full.svg'
import "./NavBar.scss"

export const Navbar = () => {
    return (
        <header id="header">
            <nav>
                <div className="logo">
                    <Link to="/">
                        <svg className="logo-svg" width="210px" height="80px">
                            <path d="M155.865,69.053h-14.957L111.502,7h13.763L155.865,69.053z"/>
                            <path d="M192.252,69.053h-14.957L147.89,7h13.763L192.252,69.053z"/>
                            <path d="M111.328,7h13.763L95.686,69.053H80.729L111.328,7z"/>
                        </svg>
                    </Link>
                </div>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" className={(isActive)=> isActive ?  'item-select' : ''}>Home</NavLink></li>
                    <li><NavLink to="/category/indumentaria">Indumentaria</NavLink></li>
                    <li><NavLink to="/category/arte">Arte</NavLink></li>
                </ul>
                <div className="carrito">
                    <Link to="/cart">
                        <CartWidget className="carrito" />
                    </Link>
                </div>
            </nav>
        </header>
    );
};
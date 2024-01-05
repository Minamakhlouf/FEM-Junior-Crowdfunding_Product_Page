import React, { useState } from "react";
import logoImg from "../images/logo.svg"; 
import hamburgerIcon from "../images/icon-hamburger.svg"; 
import xIcon from "../images/icon-close-menu.svg"; 
import "./Navigation.css"; 

function Navigation() {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        if (isClicked) {
            setIsClicked(false); 
        } else {
            setIsClicked(true); 
        }
    }

    return (
        <header>
            <nav className="headnav">
                <img src= {logoImg} alt="logo of company"/>
                <div className="headnav__icon-container" onClick={clickHandler}>
                    <img className={`icon ${!isClicked ? `visible` : "hidden"}`} src= {hamburgerIcon} alt="hamburger logo"/>
                    <img className={`icon ${isClicked ? `visible` : "hidden"}`} src= {xIcon} alt="close menu button"/> 
                </div>
                <ul className="headnav__desktop-list">
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </nav>
            <ul className={`headnav__mobile-list ${isClicked ? "visible" : ""}`}>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
            {isClicked ? <div className="navigation__overlay" onClick={clickHandler}></div> : null};
        </header>
    )
}

export default Navigation; 
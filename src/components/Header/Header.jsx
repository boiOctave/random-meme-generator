import React from "react";
import "./header.css";

const Header = () => {
    return(
        <header className="header">
            <img 
            className="header--image"
            src={require("./Header-Images/meme-logo.png")} //require is a JS method and must be in a{}
            alt="troll-face png" />                        
            <h2 className="header--title">Memester</h2>
            <h4 className="header--project">Random Meme Generator</h4>
        </header>
    )
}

export default Header;
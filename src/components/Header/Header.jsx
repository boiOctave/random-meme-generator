import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <img 
            className="header--image"
            src={require("./Header-Images/troll-face.png")} 
            alt="troll-face png" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Meme Generator Project</h4>
        </header>
    )
}

export default Header;
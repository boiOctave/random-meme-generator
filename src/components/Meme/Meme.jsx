import React from "react";
import "./Meme.css";

const Meme = () => {
    return(
        <main>
            <form className="form">
                <div className="input--container">
                    <input 
                        className="form--input"
                        placeholder="Left Text"
                        type="text" 
                        />
                    <input 
                        className="form--input"
                        placeholder="Right Text"
                        type="text" 
                        />
                </div>
                <button
                    className="form--button">Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
 export default Meme;

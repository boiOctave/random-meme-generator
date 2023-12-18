import React from "react";
import "./meme.css";
import memesData from "./memesData";

const Meme = () => {

    const getRandomMemes = () => {
        //store the imported content(memesData) in a variable - memesArray
        const memesArray = memesData(); 
        //accessing the array of objects called memes from what we imported
        const randomMemes = memesArray.data.memes;
        // Get a random index within the array length
        const randomIndex = Math.floor(Math.random() * randomMemes.length);
        const url = randomMemes[randomIndex].url;
        console.log(url);
    }

    return(
        <main>
            <div className="form">
                <div className="input--container">
                    <input 
                        className="form--input"
                        placeholder="Top Text"
                        type="text" 
                        />
                    <input 
                        className="form--input"
                        placeholder="Bottom Text"
                        type="text" 
                        />
                </div>
                <button
                    onClick={getRandomMemes}
                    className="form--button">
                        Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}
 export default Meme;

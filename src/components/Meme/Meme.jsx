import React from "react";
import { useState } from "react";
import "./Meme.css";    //Wrong file extension,*****  import "./meme.css"   was used intead of ,*** import "./Meme.css" 
import memesData from "./memesData";

const Meme = () => {

    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg");

    const getRandomMemes = () => {
        //store the imported content(memesData) in a variable - memesArray
        const memesArray = memesData(); 
        //accessing the array of objects called memes from what we imported
        const randomMemes = memesArray.data.memes;
        // Get a random index within the array length
        const randomIndex = Math.floor(Math.random() * randomMemes.length);
        const url = randomMemes[randomIndex].url;
        
        setMemeImage(url);
    }

    return(
        <main>
            <div className="content">

                <div className="">
                    <img src={memeImage} alt="" className="" />
                </div>

                <button
                    onClick={getRandomMemes}
                    className="content--button">
                        Get a new meme image 
                </button>

            </div>
        </main>
    )
}
 export default Meme;

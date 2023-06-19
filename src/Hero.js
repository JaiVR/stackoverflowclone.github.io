import React from "react";

export default function Hero(){
    return(
        <div className="Hero">
            <div className="hero-image">
                <img src="hero-img.png"></img>
            </div>
            <div className="content">
                <h3>
                Who we are
                </h3>
                <h1>
                Empowering the world to develop technology through collective knowledge.
                </h1>
                <p>
                Our public platform <strong className="serving">serves 100 million people every month</strong>, making it one of the most popular websites in the world.
<br></br><br></br>
Our asynchronous knowledge management and collaboration offering, <strong>Stack Overflow for Teams</strong>, is transforming how people work.
                </p>
            </div>
        </div>
    )
}
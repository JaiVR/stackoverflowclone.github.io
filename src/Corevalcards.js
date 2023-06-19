import React from "react";

export default function CoreValcards(props){
    return(
        <div className="corevaldivprops">
            <div className="corevalimg">
                <img src={props.coreimg}></img>
            </div>
            <div className="corevalhead">
                <h3>{props.header}</h3>
            </div>
            <div className="corevaltxt">
                <p>{props.txt}</p>
            </div>
        </div>
    )
}
import React from "react";

export default function Blockcards(props){
    return(
        <div className="blocksfooter">
            <h3>{props.header}</h3>
            <a>{props.txt1}</a>
            <a>{props.txt2}</a>
            <a>{props.txt3}</a>
            <a>{props.txt4}</a>
            <a>{props.txt5}</a>
            <a>{props.txt6}</a>
        </div>
    )
}
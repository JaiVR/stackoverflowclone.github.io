import React from "react";

export default function ProductCards(props){
    return(
        <div>
            <div className="proddivprops">
                    
                   <div className="proddivcontent">
                    <div className="proddivheadprops">
                      <div className="prodheadimgdivprops">
                        <img className="prodheadimgprops" src="stacklogo.svg"></img>
                        </div>
                        <div className="prodheadpropstxt"><h3>{props.header}</h3></div>
                    </div>
                   <div className="proddivtxts"><p>{props.prodtxt}</p></div>
                    <div className="proddivbtn"><button>{props.prodbutton}</button></div>
            </div>
            <div classname="proddivimgs"><img classname="proddivimgsimgs" src={props.prodimg}></img></div>
            </div>
        </div>
    )
}
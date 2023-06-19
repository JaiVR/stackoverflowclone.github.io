import React from "react";
import ProductCards from "./ProductCards";

export default function Product(){
    return(
        <div className="products">
            <div className="headerproduct">
            <div className="linediv1">
                        <div className="lines1">
                        <h3><strong>Our Products</strong></h3>
                        </div>
                    </div>
                    </div>
            <div className="theproddivs">
            <div className="theproddiv1">
                    <div><img classname="stacklogoproddiv" src="stacklogo.svg"></img></div>
                    <div className="theproddiv1head">Our Public Platform</div>
                   <div className="theproddiv1txt"><p>Where developers and technologists go to gain and share knowledge.</p></div>
                    <div className="theproddiv1btn"><button>Participate</button></div>
            </div>
            <div className="theproddiv2">
                 <ProductCards
                 header="FOR TEAMS"
                 prodimg="prodimg1.png"
                 prodtxt="Where developers and
                 technologists share private
                 knowledge with coworkers."
                 prodbutton="Learn More"/>
                 <ProductCards
                 header="TALENT"
                 prodimg="prodimg1.png"
                 prodtxt="Where companies build their
                 employer brand to attract top
                 tech talent."
                 prodbutton="Learn More"/>
                 <ProductCards
                 header="ADVERTISING"
                 prodimg="prodimg3.png"
                 prodtxt="Where companies reach the
                 world's largest audience of
                 developers and technologists."
                 prodbutton="Learn More"/>
                 <ProductCards
                 header="COLLECTIVES"
                 prodimg="prodimg3.png"
                 prodtxt="Where developer communities
                 connect with the specific
                 technologies they use the most."
                 prodbutton="Learn More"/>
                 </div>
            </div>
        </div>
    )
}
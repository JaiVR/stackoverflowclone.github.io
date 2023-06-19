import React from "react";

export default function Awards(){
    return(
        <div className="awards">
            <div className="awardscontent">
                <div className="awardscontentleft">
                   <p>
                   Stack Overflow helps people find the answers they need, when they need them. We're best known for our public Q&A platform that over 100 million people visit every month to ask questions, learn, and share technical knowledge.
                   </p>
                </div>
                <div className="awardscontentright">
                   <p>
                   Our products and tools empower people to find what they need to develop technology at work or at home. These products include, <a href="#">Stack Overflow for Teams</a>, <a href="#">Stack Overflow Advertising</a>, <a href="#">Collectives™</a> <a href="#">on Stack Overflow</a>, and <a href="#">Stack Overflow Talent</a>.
                   </p>
                </div>
            </div>
            <div className="awardsimages">
                <div className="awardsimg1c">
                    <img className="awardsimg1" src="awardsimg1.webp"></img>
                    <a href="">APPEALIE SaaS Awards</a>
                    <p>Collaboration + Productivity</p>
                    <div className="linediv">
                        <div className="lines">
                        <p>2021</p>
                        </div>
                    </div>
                </div>
                <div className="awardsimg2c">
                    <img className="awardsimg2" src="awardsimg2.svg"></img>
                    <a href="">RemoteTech Awards</a>
                    <p>Developer Collaboration Platform</p>
                    <div className="linediv">
                        <div className="lines">
                        <p>2021-2022</p>
                        </div>
                    </div>
                </div>
                <div className="awardsimg3c">
                    <img  className="awardsimg3" src="awardsimg3.svg"></img>
                    <a href="">The SaaS Awards</a>
                    <p>Best SaaS for Productivity</p>
                    <div className="linediv">
                        <div className="lines">
                        <p>2022</p>
                        </div>
                    </div>
                </div>
                <div className="awardsimg4c">
                    <img className="awardsimg4" src="awardsimg4.webp"></img>
                    <a href="">Webby</a>
                    <p>The Best of the Internet</p>
                    <div className="linediv">
                        <div className="lines">
                        <p>2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";

export default function Nav(){
    return(
        <div className="nav">
            <div className="wrapper">
                <div className="logo">
                    <img src="stacklogo.svg"></img>
                    <a href="#">stack<strong className="overflowtext">overflow</strong></a>
                </div>
                <ul className="nav-links">
                    
                    <li className="ourproducts"><a href="#">Our Products</a>
                    
                     <div className="mega-box">
                        <div className="content">
                            <div className="row">
                                <p>Enable your organization</p>
                                <div className="oele1">
                                    <div className="1ele1img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="oele1txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <p>Connect with ur community</p>
                                <div className="tele1">
                                    <div className="1ele1img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="tele1txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                                <div className="tele2">
                                    <div className="tele2img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="tele2txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                                <div className="tele3">
                                    <div className="tele1img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="tele3txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <p>Enable your organization</p>
                                <div className="hele1">
                                    <div className="hele1img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="hele1txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                                <div className="hele2">
                                    <div className="hele1img">
                                        <img src="stacklogo.svg"></img>
                                    </div>
                                    <div className="hele2txt">
                                        <h3>Stackoverflow for Teams</h3>
                                        <p>Where devps share knowledge and bla bla bla</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    
                    </li>
                    <li className="ourcompany"><a href="#">Our Company</a>
                    <input type="checkbox" id="showDrop" className="checkboxnav"></input>
                    <label for="showdrop" className="mobile-item">Dropdown Menu</label>
                      <ul className="companylist">
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Leadership</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Social Impact</a></li>
                      </ul>
                    
                    
                    </li>
                    <li className="careers"><a href="#">Careers</a></li>
                    <li className="openposns"><a href="#">Open Positions</a></li>
                    <li className="followus"><a href="#">Follow us</a>
                    <ul className="followuslist">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Podcast</a></li>
                        <li><a href="#">Research</a></li>
                      </ul>
                    
                    
                    </li>
                    <li className="contactbtn"><div className="navcontactbtn"><a href="#">Contact</a></div></li>
                </ul>
            </div>
        </div>
    )
}
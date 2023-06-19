import React from "react";
import Blockcards from "./Footerblocks";
import Helpcard from "./FooterhelpCards";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footerhelp">
                <Helpcard
                    img="SVGfohelp1.svg"
                    imghover="SVGfohelp1hover.svg"
                    txt="Check out our FAQ about how Stack Overflow works"
                    btn="Get hlep" />
                <Helpcard
                    img="SVGfohelp2.svg"
                    imghover="SVGfohelp2hover.svg"
                    txt="To share feedback, visit out meta community."
                    btn="Visit Meta" />
                <Helpcard
                    img="SVGfohelp3.svg"
                    imghover="SVGfohelp3hover.svg"
                    txt="Looking for help with Stack Overflow for Teams?"
                    btn="Teams help" />
            </div>
            <footer className="boomfooter">
                <div className="footerimg">
                    <img classname="footerstacklogo" src="stacklogo.svg"></img>
                </div>
                <Blockcards
                    className="stelefoo"
                    header="STACK OVERFLOW"
                    txt1="About"
                    txt2="Press"
                    txt3="Work Here"
                    txt4="Contact Us"
                    txt5="Questions" />
                <Blockcards
                    header="PRODUCTS"
                    txt1="Teams"
                    txt2="Advertising"
                    txt3="Collectives"
                    txt4="Talent" />
                <Blockcards
                    header="POLICIES"
                    txt1="Legal"
                    txt2="Privacy Policy"
                    txt3="Terms of service"
                    txt4="Cookie Settings"
                    txt5="Cookie Policy" />
                <Blockcards
                    header="CHANNELS"
                    txt1="Blog"
                    txt2="Podcast"
                    txt3="Newsletter"
                    txt4="Twitter"
                    txt5="Linkedin"
                    txt6="Instagram" />
            </footer>
        </div>
    )
}
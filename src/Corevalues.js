import React from "react";
import CoreValcards from "./Corevalcards";

export default function Corevalues() {
    return (
        <div className="coreval">
            <div className="headerproduct">
            <div className="linediv1">
                        <div className="lines1">
                        <h3>Our core values</h3>
                        </div>
                    </div>
                    </div>
        <div className="corevaldivs">
            <CoreValcards
                coreimg="SVGcv1.svg"
                header="Adopt a customer-first
                mindset"
                txt="Authentically serve our customers by
                empowering, listening, and collaborating
                with our fellow Stackers." />
            <CoreValcards
                coreimg="SVGcv2.png"
                header="Be flexible and inclusive"
                txt="We do our best work when a diverse group
                of people collaborate in an environment of
                respect and trust. Create space for different
                voices to be heard, and allow flexibility in
                how people work." />
            <CoreValcards
                coreimg="SVGcv3.svg"
                header="Be transparent"
                txt="Communicate openly and honestly, both
                inside and outside the company. Encourage
                transparency from others by being
                empathetic, reliable, and acting with
                integrity." />
            <CoreValcards
                coreimg="SVGcv4.svg"
                header="Empower people to deliver
                outstanding results"
                txt="Give people space to get their job done,
                support them when they need it, and
                practice blameless accountability." />
            <CoreValcards
                coreimg="SVGcv5.svg"
                header="Keep community at our center"
                txt="Community is at the heart of everything we
                do. Nurture healthy communities where
                everyone is encouraged to learn and give
                back." />
            <CoreValcards
                coreimg="SVGcv6.svg"
                header="Learn, share, grow"
                txt="Adopt a Growth Mindset. Be curious and
                eager to learn. Aim for ethical, sustainable,
                long-term growth, both personally and in
                the company." />
        </div>
        </div>
    )
}
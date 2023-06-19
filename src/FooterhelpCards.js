import React, { useState } from "react";

export default function Helpcard(props) {
  const [imageSrc, setImageSrc] = useState(props.img);

  function handleMouseOver() {
    setImageSrc(props.imghover);
  }

  function handleMouseOut() {
    setImageSrc(props.img);
  }

  return (
    <div
      className="footerhelpprops"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="helpimg">
        <img
          className="helpimga"
          src={imageSrc}
          alt=""
        ></img>
      </div>
      <div className="helptxt">
        <a href={props.link}>{props.txt}</a>
      </div>
      <div className="helpbtn">
        <div className="btnhelptxt">
          <p>{props.btn}</p>
        </div>
      </div>
    </div>
  );
}

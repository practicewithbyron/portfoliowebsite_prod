import React from "react";
import "./about.css";

const AboutImg = () => {
    return(
        <div className="about-img__container">
            <img className="about__img" src={require("./myself.jpeg")} alt=""/>
        </div>
    )
}

export default AboutImg;
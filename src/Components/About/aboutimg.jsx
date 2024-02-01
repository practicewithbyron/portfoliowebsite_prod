import React from "react";
import "./about.css";

const AboutImg = () => {
    return(
        <div className="about-img__container">
            <img className="about__img" src={require("./myself.jpeg")} alt="insert picture of Byron here..."/>
        </div>
    )
}

export default AboutImg;
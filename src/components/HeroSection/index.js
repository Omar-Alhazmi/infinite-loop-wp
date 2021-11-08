import React from "react";
import Video from "../../videos/video.mp4";
import * as HeroElements from "./HeroElements";

const HeroSection = () => {


  return (
    <HeroElements.HeroContainer id="home">
        <HeroElements.VideoBg controls   src={Video} type="video/mp4" />     
    </HeroElements.HeroContainer>
  );
};

export default HeroSection;

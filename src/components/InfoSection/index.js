import React from "react";
import {Button} from "../ButtonElements";
import * as InfoElements from "./InfoElements";

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
  return (
    <>
     {id === "signup" ?
      <InfoElements.InfoContainer2 lightBg={lightBg} id={id}>
     <InfoElements.InfoWrapper>
          <InfoElements.InfoRow imgStart={imgStart}>
            <InfoElements.Column1>
              <InfoElements.TextWrapper>
                <InfoElements.TopLine>{topLine}</InfoElements.TopLine>
                <InfoElements.Heading lightText={lightText}>{headline}</InfoElements.Heading>
                <InfoElements.Subtitle darkText={darkText}>{description}</InfoElements.Subtitle>
                <InfoElements.BtnWrap>
                  <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0 }  dark={dark ? 1 :0}  dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                </InfoElements.BtnWrap>
              </InfoElements.TextWrapper>
            </InfoElements.Column1>
            <InfoElements.Column2>
              <InfoElements.ImgWrap>
                <InfoElements.Img src={img}  alt={alt}/>
              </InfoElements.ImgWrap>
            </InfoElements.Column2>
          </InfoElements.InfoRow>
          </InfoElements.InfoWrapper>
          </InfoElements.InfoContainer2>
       : <InfoElements.InfoContainer lightBg={lightBg} id={id}>
        <InfoElements.InfoWrapper>
          <InfoElements.InfoRow imgStart={imgStart}>
            <InfoElements.Column1>
              <InfoElements.TextWrapper>
                <InfoElements.TopLine>{topLine}</InfoElements.TopLine>
                <InfoElements.Heading lightText={lightText}>{headline}</InfoElements.Heading>
                <InfoElements.Subtitle darkText={darkText}>{description}</InfoElements.Subtitle>
                <InfoElements.BtnWrap>
                  <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0 }  dark={dark ? 1 :0}  dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                </InfoElements.BtnWrap>
              </InfoElements.TextWrapper>
            </InfoElements.Column1>
            <InfoElements.Column2>
              <InfoElements.ImgWrap>
                <InfoElements.Img src={img}  alt={alt}/>
              </InfoElements.ImgWrap>
            </InfoElements.Column2>
          </InfoElements.InfoRow>
        </InfoElements.InfoWrapper>
      </InfoElements.InfoContainer>
      }
    </>
  );
};

export default InfoSection;

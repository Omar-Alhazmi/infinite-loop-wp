import React from "react";
import {Button} from "../ButtonElements";
import * as InfoElements from "./InfoElements";
import WhitePaper from './infinteloopERP.pdf'
const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,lightParagraph,description,buttonLabel,img,alt,primary,dark,dark2}) => {
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
                <InfoElements.Subtitle lightParagraph={lightParagraph}>{description}</InfoElements.Subtitle>
                <InfoElements.BtnWrap>
                    <Button primary href={WhitePaper} download>{buttonLabel}</Button>
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
                <InfoElements.Subtitle lightParagraph={lightParagraph}>{description}</InfoElements.Subtitle>
                <InfoElements.BtnWrap>
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

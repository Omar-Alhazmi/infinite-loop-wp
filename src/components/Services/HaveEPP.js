import React from 'react';
import Icon1 from '../../images/crypto.svg';
import Icon2 from '../../images/data.svg';
import Icon3 from '../../images/rev.svg';

import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./ServicesElements";

const HaveEPP = () => {
    return (
        <ServicesContainer id="HaveEPP" lightBg>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard className="extendH">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2 darkHed>Access New Technologies</ServicesH2>
                    <ServicesP darkText>By advantage of rapidly advancing new technologies and improving user paradigms.</ServicesP>
                </ServicesCard>
                <ServicesCard className="extendH">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2 darkHed> Reduce third-party dependencies</ServicesH2>
                    <ServicesP darkText>Using cloud applications from your legacy ERP vendor often produces the same or better intelligence without needing an additional vendor relationship.</ServicesP>
                </ServicesCard>
                <ServicesCard className="extendH">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2 darkHed>Evolve your financial systems</ServicesH2>
                    <ServicesP darkText>Legacy systems were never meant to be modern reporting engines.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default HaveEPP;

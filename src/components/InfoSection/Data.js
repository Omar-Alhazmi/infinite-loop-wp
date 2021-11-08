import * as InfoElements from "./InfoElements";
import {Button} from "../ButtonElements";

const MVPLink = <Button href='https://vex-xcc.github.io/infinite-loop/#/' target="_blank">
    MVP
</Button>
const describe = <>
<InfoElements.Subtitle>
Inventory is an expensive asset that needs to be carefully managed and controlled. 
                Complex decisions need to be made about how much to hold and where to store it.
</InfoElements.Subtitle>
<InfoElements.TopLine>
Inventory Management
</InfoElements.TopLine>
<InfoElements.Subtitle>
For inventory management to be properly achieved, 
    the organization not only  needs an ERP system, but also a level of 
    functional and process maturity to ensure  the system can be used effectively
</InfoElements.Subtitle>
</>
const des =
<>
<ul>
    <li>Enterprise</li>
    <li>Resource</li>
    <li>Planning</li>
</ul>
<br />
Company have relied on it since the 90s to streamlined process and improve data visibility 
around finance project management and manufacturing.
</>
export const homeObjOne={
    id:'about',
    lightBg:false,
    lightParagraph:true,
    lightTextDesc:true,
    topLine:'Whats ERP ?',
    headline:'ERP stand for',
    description:des,
    imgStart:false,
    img: require('../../images/sv1.svg').default,
    alt:'Car',
    darkText:false,
};

export const homeObjTwo={
    id:'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Why is Inventory so Important?',
    headline:'',
    description: describe,
    imgStart:true,
    img: require('../../images/login.svg').default,
    alt:'Piggybank',
    dark:false,
    primary:false,
    darkText:true,
};

export const homeObjThree={
    id:'signup',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    lightParagraph:true,
    topLine:'JOIN Us To Improve Your work',
    headline:'Take a look at InfiniteLoop MVP',
    description:MVPLink,
    buttonLabel:'Download White Paper',
    imgStart:true,
    img: require("../../images/bitcoin.svg").default,
    alt:'Papper',
    dark:true,
    primary:true,
    darkText:true,
};
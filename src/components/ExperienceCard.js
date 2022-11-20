import React from 'react';
import gskLogo from "../imgs/companies/gsk.png";
import capgeminiLogo from "../imgs/companies/capgemini.png";
import centuryLinkLogo from "../imgs/companies/centurylink.png";
import emakinaLogo from "../imgs/companies/emakina.png";

const companyLogos = {
    "gsk" : gskLogo,
    "capgemini" : capgeminiLogo,
    "centurylink" : centuryLinkLogo,
    "emakina" : emakinaLogo
}

const positionClassMap = {
    0: "desc-b",
    1: "desc-l",
    2: "desc-c",
    3: "desc-r"
}

export default function ExperienceCard(props){
    return (    
        <div id={props.companyId} className={`experience-card__container ${props.initialPosition === 2 ? '': 'floating-circle minimized'} ${positionClassMap[props.initialPosition]}`}>
            <div  className={`maincontentarea-description `}>
                    <div className="maincontentarea__company-logo-container">
                    <img className='maincontentarea-company-logo' src={companyLogos[props.companyId]} alt={`${props.companyId} logo`}/>
                    </div>
                    <h3 className='maincontentarea-company-duration'>{props.time}</h3>
                    <h3 className='maincontentarea-company-role'>{props.role}</h3>
                    <div className="maincontentarea__description-container">
                        <p>
                        {props.description}
                        </p>
                    </div>
                </div>
        </div>
    )
}
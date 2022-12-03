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
    0: "experiencecard__position-back",
    1: "experiencecard__position-left",
    2: "experiencecard__position-front",
    3: "experiencecard__position-right"
}

export default function ExperienceCard(props){
    return (    
        <div id={props.companyId} className={`experience-card__container ${props.initialPosition === 2 ? '': 'floating-circle minimized'} ${positionClassMap[props.initialPosition]}`}>
            <div  className={`experiencecard__description`}>
                    <div className="experiencecard__company-logo-container">
                    <img className='experiencecard__company-logo' src={companyLogos[props.companyId]} alt={`${props.companyId} logo`}/>
                    </div>
                    <h3 className='experiencecard__company-duration'>{props.time}</h3>
                    <h3 className='experiencecard__company-role'>{props.role}</h3>
                    <div className="experiencecard__description-container">
                        <p>
                        {props.description}
                        </p>
                    </div>
                </div>
        </div>
    )
}
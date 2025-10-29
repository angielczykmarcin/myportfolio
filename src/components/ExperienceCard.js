import React from 'react';
import gskLogo from "../imgs/companies/gsk.png";
import capgeminiLogo from "../imgs/companies/capgemini.png";
import centuryLinkLogo from "../imgs/companies/centurylink.png";
import emakinaLogo from "../imgs/companies/emakina.png";
import volvoLogo from "../imgs/companies/volvo.png";

const companyLogos = {
    "gsk" : gskLogo,
    "capgemini" : capgeminiLogo,
    "centurylink" : centuryLinkLogo,
    "emakina" : emakinaLogo,
    "volvo" : volvoLogo
}

export default function ExperienceCard(props){
    return (    
        <div id={props.companyId} className={`experience-card__container ${props.initialPosition === 0 ? '': 'floating-circle minimized maincontentexperience__floating-circle'}`}>
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
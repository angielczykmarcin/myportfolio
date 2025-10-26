import React from 'react';
import ExperienceCard from './ExperienceCard';
import workExperience from "../data/workExperience";

export default function MainContentArea(props){
    function pullCard(event){
        const descriptionBack = document.querySelector(".experiencecard__position-back");
        const descriptionLeft = document.querySelector(".experiencecard__position-left");
        const descriptionCenter = document.querySelector(".experiencecard__position-front");
        const descriptionRight = document.querySelector(".experiencecard__position-right");

        descriptionBack.classList.remove('experiencecard__position-back');
        descriptionBack.classList.add('experiencecard__position-left');
        descriptionLeft.classList.remove('experiencecard__position-left');
        descriptionLeft.classList.add('experiencecard__position-front');
        descriptionCenter.classList.remove('experiencecard__position-front');
        descriptionCenter.classList.add('experiencecard__position-right');
        descriptionRight.classList.remove('experiencecard__position-right');
        descriptionRight.classList.add('experiencecard__position-back');

        descriptionLeft.classList.remove('maincontentexperience__floating-circle');
        descriptionLeft.classList.remove('minimized');
        descriptionLeft.style.width = 'unset';
        descriptionLeft.style.height = 'unset';
        descriptionLeft.style.background = 'transparent';
        descriptionLeft.style.transition = `scale 0.5s ease, translate 0.5s ease, transform 0.5s ease`;
        descriptionLeft.style.translate = `0px 0px`;
        descriptionLeft.style.transform = `translate(0px, 0px)`;
        descriptionLeft.childNodes[0].style.scale = '1';

        descriptionCenter.classList.add('maincontentexperience__floating-circle');
        descriptionCenter.style.transition = `scale 0.5s ease, translate 0.5s ease, transform 0.5s ease`;
        descriptionCenter.style.translate = `0px 0px`;
        descriptionCenter.style.transform = `translate(${getRandomPos('x')}px, ${getRandomPos('y')}px)`;
        descriptionCenter.childNodes[0].style.scale = '0.001';

        switch (descriptionLeft.id) {
            case 'emakina':
                props.setTechnologies(['salesforce']);
                props.setTools(['jira','confluence','vscode'])
                break;
            case 'gsk':
                props.setTechnologies(['salesforce','csharp']);
                props.setTools(['jira','confluence','vscode'])
                break;
            case 'capgemini':
                props.setTechnologies(['html','css','salesorce','js','react', 'salesforce']);
                props.setTools(['jira','confluence','vscode','gitlab','azuredevops','bitbucket'])
                break;
            case 'centurylink':
                props.setTechnologies(['html','css']);
                props.setTools([])
                break;
            case 'volvo':
                props.setTechnologies(['html','css','js','salesforce']);
                props.setTools(['vscode','azuredevops','git'])
                break;
            default:
                props.setTechnologies([]);
                props.setTools([])
                break;
        }
        
        function getRandomPos(axis){
            if(axis === 'x'){
                return Math.random() * window.innerWidth - (window.innerWidth/2);
            }else if (axis ==='y'){
                return Math.random() * window.innerHeight - (window.innerHeight/2)
            }
        }
    }
    

    const cards = workExperience.map((item,index) => {
        return (
            <ExperienceCard 
                key={item.companyId}
                companyId={item.companyId}
                companyName={item.companyName}
                time={item.time}
                description={item.description}
                initialPosition={index}
                role={item.role}
            />
        )
    }) 

    return (    
            <div className="maincontentexperience__experience-cards-container fade-in" onClick={pullCard}>
                {cards}
            </div>
    )
}
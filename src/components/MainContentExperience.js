import React from 'react';
import ExperienceCard from './ExperienceCard';
import workExperience from "../data/workExperience";
let activeCardIndex = 0;

export default function MainContentArea(props){
    function pullCard(event){
        activeCardIndex = (activeCardIndex + 1) % workExperience.length;
        let activeCard;
        const experienceCards = document.querySelectorAll(".experience-card__container ");
        experienceCards.forEach(((card, index) => {
            if(card.id === workExperience[activeCardIndex].companyId){
                activeCard = card;
                card.classList.remove('maincontentexperience__floating-circle','minimized');
                card.style.width = 'unset';
                card.style.height = 'unset';
                card.style.background = 'transparent';
                card.style.transition = `scale 0.5s ease, translate 0.5s ease, transform 0.5s ease`;
                card.style.translate = `0px 0px`;
                card.style.transform = `translate(0px, 0px)`;
                card.childNodes[0].style.scale = '1';
            }
            else{
                card.classList.add('maincontentexperience__floating-circle','minimized');
                card.style.transition = `scale 0.5s ease, translate 0.5s ease, transform 0.5s ease`;
                card.style.translate = `0px 0px`;
                card.style.transform = `translate(${getRandomPos('x')}px, ${getRandomPos('y')}px)`;
                card.childNodes[0].style.scale = '0.001';
            }
        }));
        
        switch (activeCard.id) {
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
import React from 'react';
import MainContentExperience from './MainContentExperience';
import MainContentHome from './MainContentHome';

export default function MainContentArea(props){
    let activeContent;
    switch (props.activeTab) {
        case 0:
            activeContent = <MainContentHome/>
            break;
        case 1:
            activeContent = <MainContentExperience setTechnologies={props.setTechnologies} setTools={props.setTools}/>
            break;
        default:    
            break;
    }   
    return (
        <section className="maincontentarea__container">
        {activeContent}
        </section>  
    )
}
    




  
  
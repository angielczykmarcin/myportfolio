import React from 'react';
import MainContentExperience from './MainContentExperience';
import MainContentHome from './MainContentHome';
import MainContentContact from './MainContentContact';

export default function MainContentArea(props){
    console.log(props.activeTab);
    let activeContent = <MainContentHome/>;
        switch (props.activeTab) {
            case 0:
                activeContent = <MainContentHome/>;
                break;
            case 1:
                activeContent = <MainContentExperience setTechnologies={props.setTechnologies} setTools={props.setTools}/>;
                break;
            case 2:
                activeContent = <MainContentContact/>;
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
    




  
  
import React from 'react';
import SidebarExperience from './SidebarExperience';

export default function SidebarArea(props){

    let activeSideContent;
    switch (props.activeTab) {
        case 0:
            activeSideContent = '';
            break;
        case 1:
            activeSideContent = <SidebarExperience technologies={props.technologies} tools={props.tools}/>
            break;
        default:    
            break;
    }   

    return (
        <section className="sidebararea__container">
            {activeSideContent}
        </section>
    )
}
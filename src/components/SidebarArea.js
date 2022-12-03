import React from 'react';
import SidebarExperience from './SidebarExperience';

export default function SidebarArea(props){

   
    return (
        <section className="sidebararea__container">
        <SidebarExperience technologies={props.technologies} tools={props.tools}/>
        </section>
    )
}
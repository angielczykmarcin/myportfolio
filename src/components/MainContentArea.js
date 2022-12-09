import React from 'react';
import MainContentExperience from './MainContentExperience';
import MainContentHome from './MainContentHome';
import MainContentContact from './MainContentContact';

export default function MainContentArea(props){

    return (
        <section className="maincontentarea__container">
        {props.activeTab === 0 && <MainContentHome/>}
        {props.activeTab === 1 && <MainContentExperience setTechnologies={props.setTechnologies} setTools={props.setTools}/>}
        {props.activeTab === 2 &&  <MainContentContact/>}
        </section>  
    )
}
    




  
  
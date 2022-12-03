import React from 'react';
import MainContentExperience from './MainContentExperience';

export default function MainContentArea(props){

    return (
        <section className="maincontentarea__container">
        <MainContentExperience setTechnologies={props.setTechnologies} setTools={props.setTools}/>
        </section>  
    )
}




  
  
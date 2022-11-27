import React from 'react';
import {icons} from '../data/logos.js';


export default function SidebarArea(props){

    const technologyIcons = icons.filter((el) => el.type === 'technology').map((item,index) => {
        return (
            <div key={item.id} className={`sidebararea__technology-icon-container ${props?.technologies?.find((el) => el === item.id) ? 'sidebararea__logo-fade-in' : 'sidebararea__logo-fade-out'}`}>
            <img alt={`${item.name} logo`} 
            src={item.path}
            />
            <h4>{item.name}</h4>
            </div>
        )
    }) 

    const toolIcons = icons.filter((el) => el.type === 'tool').map((item,index) => {
        return (
            <div key={item.id} className={`sidebararea__tools-icon-container ${props?.tools?.find((el) => el === item.id) ? 'sidebararea__logo-fade-in' : 'sidebararea__logo-fade-out'}`}>
            <img alt={`${item.name} logo`} 
            src={item.path}
            />
            <h4 className="sidebararea__tools-icon-name">{item.name}</h4>
            </div>
        )
    }) 

    return (
        <section className="sidebararea__container">
            
                <div className="sidebararea__technologies-container">
                    <div className="sidebararea__technologies-title-container">
                        <h2 className="sidebararea__technologies-title">
                            Technologies {`</>`}
                        </h2>
                    </div>
                    <div className="sidebararea__technologies-icons-container">
                        <div className="sidebararea__technologies-icons">
                            {technologyIcons}
                        </div>
                    </div>
                </div>
            
                <div className="sidebararea__tools-container">
                <div className="sidebararea__tools-icons-container">
                        <div className="sidebararea__tools-icons">
                        {toolIcons}
                </div>
                
                
            </div>
            </div>
        </section>
    )
}
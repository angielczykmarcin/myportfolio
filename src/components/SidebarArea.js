import React from 'react';
import './SidebarArea.css';
import {icons} from '../data/logos.js';


export default function SidebarArea(props){

    const technologyIcons = icons.filter((el) => el.type === 'technology').map((item,index) => {
        return (
            <div key={item.id} className={`technology-icon-container ${props?.technologies?.find((el) => el === item.id) ? 'logo__fade-in' : 'logo__fade-out'}`}>
            <img alt={`${item.name} logo`} 
            src={item.path}
            />
            <h4 className="technology-icon-name">{item.name}</h4>
            </div>
        )
    }) 

    const toolIcons = icons.filter((el) => el.type === 'tool').map((item,index) => {
        return (
            <div key={item.id} className={`tools-icon-container ${props?.tools?.find((el) => el === item.id) ? 'logo__fade-in' : 'logo__fade-out'}`}>
            <img alt={`${item.name} logo`} 
            src={item.path}
            />
            <h4 className="tools-icon-name">{item.name}</h4>
            </div>
        )
    }) 

    return (
        <section className="sidebararea--container">
            
                <div className="sidebararea__technologies-container">
                    <div className="sidebararea__technologies-title-container">
                        <h2 className="sidebararea-technologies-title">
                            Technologies {`</>`}
                        </h2>
                    </div>
                    <div className="sidebararea__technologies-icons-container">
                        <div className="sidebararea--technologies-icons">
                            {technologyIcons}
                        </div>
                    </div>
                </div>
            
                <div className="sidebararea__tools-container">
                <div className="sidebararea__tools-icons-container">
                        <div className="sidebararea--tools-icons">
                        {toolIcons}
                </div>
                
                
            </div>
            </div>
        </section>
    )
}
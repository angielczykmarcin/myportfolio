import React from 'react';
import MainContentArea from './MainContentArea';
import SidebarArea from './SidebarArea';
import Background from './Background';


export default function Content(props){
    const [technologies, setTechnologies] = React.useState(['css','html']);
    const [tools, setTools] = React.useState(['vscode']);

    function changeDisplayedTechnologies(values){
        setTechnologies(values);
    }
    function changeDisplayedTools(values){
        setTools(values);
    }

    return (
        <div className="content__container">
            <Background activeTab={props.activeTab}/>
            <MainContentArea setTechnologies={changeDisplayedTechnologies} setTools={changeDisplayedTools} activeTab={props.activeTab}/>
            <SidebarArea technologies={technologies} tools={tools}/>
        </div>
    )
}
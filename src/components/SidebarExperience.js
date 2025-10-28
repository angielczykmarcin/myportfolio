import {icons} from '../data/logos.js';


export default function SidebarExperience(props){

    const technologyIcons = icons.filter((el) => el.type === 'technology').map((item,index) => {
        return (
            <div key={item.id} className={`sidebarexperience__technology-icon-container ${props?.technologies?.find((el) => el === item.id) ? 'sidebarexperience__logo-fade-in' : 'sidebarexperience__logo-fade-out'}`}>
            <div className={"sidebarexperience__technology-icon-image-container"}>
                <img alt={`${item.name} logo`} 
                src={item.path}
                />
            </div>
            <h4>{item.name}</h4>
            </div>
        )
    }) 

    return (
        <div>
                <div className="sidebarexperience__technologies-container">
                    <div className="sidebarexperience__technologies-title-container">
                        <h2 className="sidebarexperience__technologies-title">
                            Technologies {`</>`}
                        </h2>
                    </div>
                    <div className="sidebarexperience__technologies-icons-container">
                            {technologyIcons}
                    </div>
                </div>
        </div>
    )
}
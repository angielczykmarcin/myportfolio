import { React } from 'react';
import './Navbar.css';

export default function Navbar(props){

    function switchTab(event){
        props.setActiveTab(event.target.value)
        
    }

    return (
        <div className="navbar--container">
            <ul>
                <li value="0" onClick={switchTab}>Home</li>
                <li value="1" onClick={switchTab}>Experience</li>
                <li value="2" onClick={switchTab}>Contact</li>
            </ul>
        </div>
    )
}
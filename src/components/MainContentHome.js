import React from 'react';

export default function MainContentHome(){
    return (
        <div className='maincontenthome__container fade-in'>
            <span className='maincontenthome__title'>
                Welcome to my page.
            </span>
            <span className="maincontenthome__greetings">
                I'm Marcin - a software developer with experience in a variety of technologies and tools.
                Checkout my <span className="maincontenthome__keyword-experience">experience</span> to learn more about me and <span className="maincontenthome__keyword-contact">contact</span> me directly!
            </span>
        </div>
    )
}
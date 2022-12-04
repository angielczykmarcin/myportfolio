import React from 'react';

export default function MainContentContact(){
    return (
            <form className="maincontentcontact__form">

                <label className="maincontentcontact__label">Your name</label>
                <input type="text" id="name" name="name" className="maincontentcontact__input" placeholder="Your name.."/>

                <label className="maincontentcontact__label">Subject</label>
                <input type="text" id="subject" name="subject" className="maincontentcontact__input" placeholder="Your last name.."/>

                <label className="maincontentcontact__label">Body</label>
                <textarea id="body" name="body" className="maincontentcontact__input maincontentcontact__input-body" placeholder="Write something.."></textarea>

                <input className="maincontentcontact__button-submit" type="submit" value="Submit"/>

            </form>
    )
}
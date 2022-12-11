import React from 'react';

export default function MainContentContact(){

    const [showToast, setShowToast] = React.useState(false);

   function handleFormSubmit(evt){
        evt.preventDefault();
        const formName = document.getElementById('name').value;
        const formSubject = document.getElementById('subject').value;
        const formBody = document.getElementById('body').value;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", 'https://marcinangielczyk.pl/contact/', false);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify({"name" : formName, "subject": formSubject, "body" : formBody}));
        if(xmlhttp.status === 200){
            clearFormData(formName, formSubject, formBody);
            setShowToast(previousValue => {
                return !previousValue
            })
            setTimeout(() => {
                setShowToast(previousValue => {
                    return !previousValue
                })
            }, 2000);
        }
   }

   function clearFormData(){
    const formName = document.getElementById('name');
    const formSubject = document.getElementById('subject');
    const formBody = document.getElementById('body');
    formName.value = '';
    formSubject.value = '';
    formBody.value ='';
   }

    return (
            <form className="maincontentcontact__form fade-in">
                
                <label className="maincontentcontact__label">Your name</label>
                <input type="text" id="name" name="name" className="maincontentcontact__input" placeholder="Your name.."/>

                <label className="maincontentcontact__label">Subject</label>
                <input type="text" id="subject" name="subject" className="maincontentcontact__input" placeholder="Subject..."/>

                <label className="maincontentcontact__label">Body</label>
                <textarea id="body" name="body" className="maincontentcontact__input maincontentcontact__input-body" placeholder="Write something..."></textarea>

                <input className="maincontentcontact__button-submit" type="submit" onClick={handleFormSubmit}value="Submit"/>
                {showToast && <div className="maincontentcontact__toast">Message has been sent, thank you!</div>}
            </form>
    )
}
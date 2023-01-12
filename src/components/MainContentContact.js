import React from 'react';

export default function MainContentContact(){

    const [showToast, setShowToast] = React.useState(false);
    const [submitDisabled, setSubmitDisabled] = React.useState(false);

   function handleFormSubmit(evt){
        setSubmitDisabled(previousValue => {
            return !previousValue;
        })
        evt.preventDefault();
        const formName = document.getElementById('name').value;
        const formSubject = document.getElementById('subject').value;
        const formBody = document.getElementById('body').value;
        fetch('https://marcinangielczyk.pl/contact/',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"name" : formName, "subject": formSubject, "body" : formBody})
        })
        .then(response => {
            if(response.status === 200){
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
            setSubmitDisabled(previousValue => {
                return !previousValue;
            })
        })
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

                <input className="maincontentcontact__button-submit" type="submit" onClick={handleFormSubmit} value="Submit" disabled={submitDisabled}/>
                {showToast && <div className="maincontentcontact__toast">Message has been sent, thank you!</div>}
            </form>
    )
}

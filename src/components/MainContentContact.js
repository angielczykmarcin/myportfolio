import React, { useState, useEffect, useRef } from 'react';

export default function MainContentContact(){
    const popupMessage = useRef(null);
    var Spinner = require('react-spinkit');
    const [showToast, setShowToast] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const POPUP_MESSAGES = {
        success: 'Message has been sent, thank you!',
        failed: 'Message could not be sent, please try again.',
        incompleteForm: 'Please fill all form fields before sending the message.'
    }
    
    useEffect(() => {
      }, [popupMessage]);

    function handleFormSubmit(evt){
       evt.preventDefault();
       const formName = document.getElementById('name').value;
       const formSubject = document.getElementById('subject').value;
       const formBody = document.getElementById('body').value;
       if(formName && formSubject && formBody){
            setSubmitDisabled(previousValue => {
                return !previousValue;
            })
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
                    invokePopupMessage('success');
                }
                setSubmitDisabled(previousValue => {
                    return !previousValue;
                })
            })
        }
        else{
            invokePopupMessage('incompleteForm');
   }

   function invokePopupMessage(type){
        setErrorMessage( () => {
            return POPUP_MESSAGES[`${type}`];
        });
        displayPopupMessage();
    }

    function displayPopupMessage(){
        setShowToast(previousValue => {
            return !previousValue
        })
        setTimeout(() => {
            popupMessage.current.classList.add('fade-out');
            setTimeout(() => {
                setShowToast(previousValue => {
                    return !previousValue
                })
            }, 500);
        }, 1500);
    }

   function clearFormData(){
    const formName = document.getElementById('name');
    const formSubject = document.getElementById('subject');
    const formBody = document.getElementById('body');
    formName.value = '';
    formSubject.value = '';
    formBody.value ='';
   }
    }
    return (
            <form className="maincontentcontact__form fade-in">
                {showToast && <div ref={popupMessage} className="maincontentcontact__toast fade-in">{errorMessage}</div>}
                <label className="maincontentcontact__label">Your name</label>
                <input type="text" id="name" name="name" className="maincontentcontact__input" placeholder="Your name.."/>

                <label className="maincontentcontact__label">Subject</label>
                <input type="text" id="subject" name="subject" className="maincontentcontact__input" placeholder="Subject..."/>

                <label className="maincontentcontact__label">Body</label>
                <textarea id="body" name="body" className="maincontentcontact__input maincontentcontact__input-body" placeholder="Write something..."></textarea>
                <input className="maincontentcontact__button-submit" type="submit" onClick={handleFormSubmit} value="Submit" disabled={submitDisabled}/>
                {submitDisabled && <Spinner overrideSpinnerClassName="maincontentcontact__spinner" fadeIn="quarter" name='folding-cube' />}
                
            </form>
    )
}

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
   const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
  
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onChange={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message"></label>
                    <input type="message" defaultValue={message} rows="5" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
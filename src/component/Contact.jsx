import React, { useState } from "react";
import axios from "axios";
import './Contact.css'


function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const URL = "https://evoting-pakistan-server.herokuapp.com"

    function contact(e) {
        console.log(setName, setEmail, setMessage);
        if (name === '' || email === '' || message === '') {
            alert("Please fill the form correctly")
        }
        else {
            const submitContact = axios.post(`${URL}/contact`, { name, email, message })
                .then((response) => {
                    console.log(response.data)

                    setName("");
                    setEmail("");
                    setMessage("");
                })
                .catch(e => {
                    console.log('Error due to ' + e)
                })

            if (submitContact) {
                alert("Thank you for your message. We'll get in touch with you very soon")
            } else {
                alert("Error! please try again later")

            }


        }




    }

    return (
        <React.Fragment>

            <section id='contact'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-11 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 col-ml-12 pt-5 pt-lg-5 order-2 order-lg-1 margin-set contact-box-shodow'>
                                    <h1>Touch With Us</h1>
                                    <div className='form '>

                                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                                            name='name' placeholder="Enter Your Name" className="input-form" required />


                                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                                            name='email' placeholder="Enter Your Email" className="input-form" required />
                                        <textarea type='text' value={message} onChange={(e) => { setMessage(e.target.value) }}
                                            name='message' placeholder="Enter Your Message" className="input-form" required />
                                        <div className="btn-contact">
                                            <button className='own-btn-get-started contact-btn' type='button' onClick={contact}>Submit</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img animated img-res '>
                                    <img src="Images/contact.svg" className='img-fluid animated' alt='problem' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default Contact



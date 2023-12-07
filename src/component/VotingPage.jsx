import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import './Contact.css'
import './VotingPage.css'

function VotingPage() {

    const [cnic, setCNIC] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [problem, setProblem] = useState("")
    const [area, setArea] = useState("")
    const [message, setMessage] = useState("")
    const URL = "https://evotingpakistanserver.netlify.app/.netlify/functions/server"


    function submitVote(e) {
        // console.log(setName, setEmail, setMessage);
        if (cnic === '' || name === '' || email === '' || problem === '' || area === '' || message === '') {
            toast.warning("Please fill the form correctly", {
                position: toast.POSITION.TOP_LEFT,
            });
            setCNIC("")
            setName((""))
            setEmail("")
            setProblem("")
            setArea("")
            setMessage("")
        }
        else {
            const submitForm = axios.post(`${URL}/add-vote`, { cnic, name, email, area, problem, message })
                .then((response) => {
                    toast.success("Thank you for your vote.", {
                        position: toast.POSITION.TOP_LEFT,
                    });
                    // console.log(response.data)
                    setCNIC("")
                    setName((""))
                    setEmail("")
                    setProblem("")
                    setArea("")
                    setMessage("")
                })

                .catch(e => {
                    console.log('Error due to ' + e)
                })

            if (submitForm) {
                toast.success("Thank you for your vote.", {
                    position: toast.POSITION.TOP_LEFT,
                });
            }
            else {
                toast.error("Something went wrong, try later", {
                    position: toast.POSITION.TOP_LEFT,
                });
            }
        }
    }
    return (
        <React.Fragment>


            <section id='voting'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-11 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 col-ml-12 pt-5 pt-lg-5 order-2 order-lg-1 margin-set contact-box-shodow'>
                                    <h1>Your Vote</h1>
                                    <div className='form '>
                                        <input type="number" value={cnic} onChange={(e) => { setCNIC(e.target.value) }}
                                            name='cnic' placeholder="Enter Your CNIC Number 41021 - 999-4242-9" className="input-form" required />
                                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                                            name='name' placeholder="Enter Your Name" className="input-form" />

                                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                                            name='email' placeholder="Enter Your Email" className="input-form" />
                                        <label className="label">Choose your area from the list</label>
                                        <input list="browsers" name="browser" id="browser" placeholder="Choose your area from the list" value={area} onChange={(e) => { setArea(e.target.value) }} />

                                        <datalist id="browsers"   >
                                            <option value="North-Karachi" />
                                            <option value="New-Karachi" />
                                            <option value="North-Nazimabad" />
                                            <option value="Nazimabad" />
                                            <option value="Shadman" />
                                            <option value="Bufferzone" />
                                            <option value="Gulshan" />
                                            <option value="Johar" />


                                        </datalist>

                                        <label className="label">Problem your're facing</label>
                                        <input list="problems" name="problem" id="problem" placeholder="Problem your're facing" value={problem} onChange={(e) => { setProblem(e.target.value) }} />

                                        <datalist id="problems"  >
                                            <option value="Street Crime" />
                                            <option value="Water Crises" />
                                            <option value="Load Shedding" />
                                            <option value="Road Traffic Accident" />
                                            <option value="Broken Road" />
                                        </datalist>
                                        <textarea type='text' value={message} onChange={(e) => { setMessage(e.target.value) }}
                                            name='message' placeholder="Describe your problem here" className="input-form" />
                                        <div className="btn-contact">
                                            <button className='own-btn-get-started contact-btn' type='button' onClick={submitVote}>Vote</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img animated img-res '>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/voting.png?alt=media&token=89427c5b-928a-4f24-a18f-34486676917c" className='img-fluid animated' alt='problem' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default VotingPage


// https://www.linkpicture.com/q/pakistan-flag-l.png

// CNIC Name email problem area message
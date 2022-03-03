import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
    return (
        <section className="footer">

            <div className="box-container ">

                <div className="box">
                    <h3>eVoting Pakistan</h3>
                    <p>Lorem ipsum dolor sit Linkmet consectetur Linkdipisicing elit. LinkssumendLink quLinks mLinkgni pLinkriLinktur est LinkccusLinkntium voluptLinks enim nemo fLinkcilis sit debitis.</p>
                </div>
                <div className="box">
                    <h3>Quick Links</h3>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="about" className='link'>About</Link>
                    <Link to="votingPage" className='link'>Voting Page</Link>
                    <Link to="allareas" className='link'>District And Sub-Division</Link>
                    <Link to="problems" className='link'>Common Problems</Link>
                    <Link to="contact" className='link'>Contact</Link>
                </div>
                <div className="box">
                    <h3>Our Policies</h3>
                    <Link to="PrivacyPolicy" className='link'>Privacy Policy</Link>
                    <Link to="TermAndConditions" className='link'>Terms And Conditions</Link>
                </div>
                {/* <div>
                    <h1 className="credit"> Created By <span>Syed Bakhtawar Fahim</span> | All rights reserved! </h1>
                </div> */}

            </div>



        </section>
    )
}

export default Footer
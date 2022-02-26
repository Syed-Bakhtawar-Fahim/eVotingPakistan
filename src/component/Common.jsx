import React from "react";
import { Link } from 'react-router-dom'
import './Home.css'
// import web from 'Images/home2.svg'

function Common(props) {
    return (
        <React.Fragment>
            <div className="main-container pro-container">
                <div className="left animated">
                    <img src= {props.web} alt="HomePageImg" />
                </div>

                <div className="right">
                    <h1>{props.heading}</h1>
                    <h3>{props.title}</h3>
                    <div className="para">
                        <p> {props.para} </p>

                    </div>
                    <div className='mt-3'>
                        <Link to= {props.visit} className='own-btn-get-started'> {props.btnName} </Link>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}

export default Common
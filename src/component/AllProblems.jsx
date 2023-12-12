import React from "react";
import './Problems.css'
import './Home.css'
import { Link } from 'react-router-dom'


function AllProblems(props) {
    return(
        <section id='header'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 col-ml-12 pt-5 pt-lg-5 order-2 order-lg-1 margin-set'>
                                <div className="box-shadow">
                                    <h1> {props.proheading} </h1>
                                </div>
                                <h5 className='my-3'>
                                    {props.protext}
                                </h5>
                                <div className='mt-3'>
                                    <Link to= {props.provisit} className='own-btn-get-started'>{props.proBtn}</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img animated'>
                                <img src= {props.web} className='img-fluid animated' alt='problem' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AllProblems
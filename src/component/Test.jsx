import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from 'react-bootstrap'
import './Problems.css'
import './Home.css'
import { Link } from 'react-router-dom'
import Common from "./Common";
import AllProblems from './AllProblems'
import Change from "./Change";
import axios from 'axios'

function Test() {
    const URL = "http://localhost:4000"
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${URL}/problems`)
            .then((response) => {
                console.log('Response', response.data)
                setData(response.data)
            })
            .catch(e => {
                console.log('Something Wrond due to this', e)
            })
    }, [])
    return (

        <React.Fragment>
            <section>


                {
                    data.map((items, i) =>
                    <h1> {items.ProBtn} </h1>
                       
                    )

                }

            </section>
        </React.Fragment>
    )
}

export default Test


{/* <AllProblems
                    proheading='Why we need your Vote?'
                    protext="Pakistan is a Third World developing country so we have to take step towards technology. Government can never know which problem should be resolved first. Through this app the government can know the priorities of the citizens and the problem that needs to be solved first. This app can help in a lot of ways in so many reasons to improve the surrounding and environment real quick. Will contain a daily news report about their respective districts like who won the elections or what's new in country etc."
                    proBtn='Start Voting'
                    provisit='votingPage'
                    web='https://firebasestorage.googleapis.com/v0/b/reactaideveloper.appspot.com/o/problem-removebg-preview.png?alt=media&token=5716e6d3-f855-40e0-a86b-aa91982e018d'
                /> */}
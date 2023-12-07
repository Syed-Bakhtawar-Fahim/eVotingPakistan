import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from 'react-bootstrap'
import './AllAreas.css'
import axios from "axios";

function AllAreas() {
    const URL = "https://evotingpakistanserver.netlify.app/.netlify/functions/server"
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${URL}/all-areas`)
            .then((response) => {
                // console.log('Response', response.data.areas)
                setData(response.data.areas)
            })
            .catch(e => {
                console.log('Something Wrond due to this', e)
            })
    }, [])


    return (
        <section className="table" id='table'>
            <h1>Complete Information Of District And Sub-Division Of Karachi</h1>
            <Container >
                <Row >
                    <Col >
                        <Table striped bordered hover size="sm" className="all-table" >
                            <tbody>
                                <tr>
                                    <td className='table-heading'>Sno</td>
                                    <td className='table-heading'>AreaName</td>
                                    <td className='table-heading'>AreaStatus</td>
                                    <td className='table-heading'>Population</td>
                                </tr>
                                {
                                    (data && data.length > 0) ?
                                        data.map((items, i) =>
                                            <tr key={i}>
                                                <td>{i}</td>
                                                <td>{items.AreaName}</td>
                                                <td >{items.AreaStatus}</td>
                                                <td>{items.DistrictPopulation}</td>
                                            </tr>
                                        ) :
                                        <div className="pre-loader">
                                            <img src="Images/pre-loader.gif" alt="Pre-loaderPK" />
                                            <h3>eVoting Pakistan</h3>
                                            <h3>Pakistan Zinadabad &#128154;</h3>
                                        </div>

                                }
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default AllAreas
// https://www.citypopulation.de/en/pakistan/karachi/admin/
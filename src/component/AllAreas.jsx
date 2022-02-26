import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from 'react-bootstrap'
import './AllAreas.css'
import axios from "axios";

function AllAreas() {
    // const URL = "http://localhost:4000"
    const URL = "https://evoting-pakistan.herokuapp.com"
    const [data, setData] = useState([])
    // const [AreaName, setAreaName] = useState("")
    // const [AreaStatus, setAreaStatus] = useState("")
    // const [DistrictPopulation, setDistrictPopulation] = useState("")

    // function saveUser() {
    //     console.log(AreaName, AreaStatus, DistrictPopulation);
    //     axios.post(`http://localhost:4000/allarea`, { AreaName, AreaStatus, DistrictPopulation })
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch(e => {
    //             console.log('Error due to ' + e)
    //         })
    // }

    useEffect(() => {
        axios.get(`${URL}/allareas`)
            .then((response) => {
                console.log('Response', response.data)
                setData(response.data)
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







            {/* <input type="text" value={AreaName} onChange={(e) => { setAreaName(e.target.value) }}
                name='AreaName' /> <br /> <br />
            <input type="text" value={AreaStatus} onChange={(e) => { setAreaStatus(e.target.value) }}
                name='AreaStatus' /> <br /> <br />
            <input type="text" value={DistrictPopulation} onChange={(e) => { setDistrictPopulation(e.target.value) }}
                name='DistrictPopulation' /> <br /> <br />
            <button type='button' onClick={saveUser}>Create New User</button> */}
        </section>
    )
}

export default AllAreas

// className="table-set"
// https://www.citypopulation.de/en/pakistan/karachi/admin/
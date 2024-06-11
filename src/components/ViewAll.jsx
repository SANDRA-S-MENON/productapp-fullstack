import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8180/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">name</th>
                                    <th scope="col">id</th>
                                    <th scope="col">description</th>
                                    <th scope="col">expirydate</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value, index)=>{
                                    return  <tr>
                                    <th scope="row">{index}</th>
                                    <td>{value.name}</td>
                                    <td>{value.id}</td>
                                    <td>{value.description}</td>
                                    <td>{value.expirydate}</td>
                                </tr>
                                }
                               )

                               }
                               



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
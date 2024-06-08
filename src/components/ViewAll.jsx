import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] = useState([])
        const fetchData=()=>{
            axios.get("https://jsonplaceholder.typicode.com/photos").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch().finally()

        }
        useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value,index) => {
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card" >
                                            <img src="https://i.pinimg.com/originals/0c/eb/87/0ceb87521533ccc8e14cd8969ca3e9c0.jpg" height="250px" class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.albumId}</h5>
                                                    <h5 class="card-title">{value.id}</h5>
                                                    <p class="card-text">{value.url}</p>
                                                    <a href="#" class="btn btn-primary">{value.title}</a>
                                                </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
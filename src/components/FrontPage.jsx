import React from 'react'
import Navigation from './Navigation'

const FrontPage = () => {
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1><center>Taking pictures is savoring life intensely, every hundredth of a second.</center></h1>
                                <nav class="navbar bg-body-tertiary">
                                    <div class="container-fluid">
                                        <form class="d-flex" role="search">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                                <button class="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <img src="https://media.istockphoto.com/id/480118358/photo/photos-on-a-table.jpg?s=612x612&w=0&k=20&c=hNImlms1Edcc19-piLvf9RIdpEC_P4EF46309bz2BSY=" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <p class="card-text">Photography is a love affair with life</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage
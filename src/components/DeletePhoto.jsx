import React from 'react'

const DeletePhoto = () => {
  return (
    <div><div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-zzl-12">
                        <label htmlFor="" className="form-label"> Name</label>
                        <input type="text" className="form-control" />
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default DeletePhoto
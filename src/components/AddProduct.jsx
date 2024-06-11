import React, { useState } from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
    const [data,changeData]=useState(
        {
            "name":"",
        "id":"",
        "description":"",
        "expirydate":"",
        }
    )
    const inputHandler =(event)=>{
        changeData({...data,[event.target.name]:event.target.value})

    }
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">description</label>
                        <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">expirydate</label>
                        <input type="date"  id="" className="form-control" name='expirydate' value={data.expirydate} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readvalue}>ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct
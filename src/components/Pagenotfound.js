import React from 'react'
import {Link} from 'react-router-dom'



const Pagenotfound=()=>
{
    return(
        <>

            <div className="container p-5 not-found">

                <div className="text-center ">

                    <h2 className="display-2 text-weight-bold" style={{color:"red"}} > 404-ERROR </h2>

                    <h3 className="display-4 "> PAGE NOT FOUND </h3>

                    <Link to="/home" > <button className="btn btn-info w-25 b my-5"> GO TO HOME </button></Link>

                </div>

            </div>

        </>
    )
}


export default Pagenotfound;
import { faHeart, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './about.css'

const Services=()=>
{
    return(
        <>
        
            {/* jumbotron */}
            <div className="jumbotron">
                <div className="container w-75 text-center text-white">
                </div>
            </div>

            <div className="container-fluid">
                <div className="row my-3 ">

                    <div className="col-lg-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="p-1"> <FontAwesomeIcon icon={faHeart} /> Passion </h4>
                                <p>We are passionated towards doings crafts.We keep our heart and soul in making of crafts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="p-1"> <FontAwesomeIcon icon={faLightbulb} /> Creativity</h4>
                                <p>We are here to satisfy clients requirements and gets updated with new trends.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="p-1 "> <FontAwesomeIcon icon={faStar} /> Quality</h4>
                                <p > Quality of our crafts will be 100% pure and perfect.Craftreina provides a quality crafts. </p>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </>
    )
}

export default Services
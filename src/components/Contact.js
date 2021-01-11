import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const fontawsome_css={
    color: "rgb(43, 13, 128)",
    fontSize: "45px"
}


const Contact=()=>
{
    return(
        <>
            
            <div className="container-fluid bg-light">

                <h1 className="text-center py-5  display-4 "> CONTACT </h1>

                <div className="row bg-light">
                    <div className="col-lg-12 bg-light">

                        <div className="container-fluid bg-light">
                            <div className="row bg-light">

                                <div className="col-lg-6 bg-light">
                                    <div className="card border-0 bg-light pt-4 mt-4 ">
                                        <div className="card-body text-center">
                                            <p> <FontAwesomeIcon icon={ faMobileAlt } style={fontawsome_css} /> </p>
                                            <h3> PHONE NUMBER </h3>
                                            <p style={{fontSize:"32px"}}> 9701128679  </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 bg-light">
                                    <div className="card border-0 bg-light pt-4 mt-4 ">
                                        <div className="card-body text-center">
                                            <p> <FontAwesomeIcon icon={ faEnvelope } style={fontawsome_css} /> </p>
                                            <h3> EMAIL ADDRESS </h3>
                                            <p style={{fontSize:"32px"}}> kavyasrikasula142@gmail.com </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                {/*-- forms --*/}
                <div className="container-fluid bg-light">
                    <div className="row bg-light">

                        <div className="col-lg-12 bg-light ">

                            <div className="card border-0 px-5 mx-5 bg-light ">
                                <div className="card-body bg-light">
                                    <form className="border-0 mb-3">
                                    
                                        <input  className="my-4 mr-4" placeholder="Name" />
                                                                    
                                        <input  className="my-4 m-4" placeholder="Email" />

                                        <br/>

                                        <label><b> FEEDBACK / COMMENTS </b></label> <br/>
                                        <textarea maxlength="200" style={{ resize:"none" , height:"100px" , width:"75%" }}></textarea>
                                        
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/*-- forms --*/}

            </div>



        </>
    )
}

export default Contact;
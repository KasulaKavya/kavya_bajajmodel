import React, { useEffect ,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './laptop.css'
import MyModal from './../Modal.js'

const url=" http://localhost:3041/hair_dryer"


const Hair_dryer = ()=>
{

    const [hair_dryer,setState]=useState([])

    

    useEffect( async ()=>
    {
        await axios.get(url).then((res)=>setState(res.data) )
    }
    ,[])


    const [modalShow, setModalShow] = React.useState(false);


    return(
        <>
            <div className="container-fluid mx-4">
                <div className="row my-3 ">

                    <div className="col-lg-2 ">

                        <div className="accordion my-5">
                            <div className="accordion-item">
                                <h4 className="accordion-header " data-bs-toggle="collapse" data-bs-target="#brand" > Brand  </h4>
                                <div className="accordion-collapse collapse " id="brand" >
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0">
                                                <input className="checkbox-type" type="checkbox" /> Apple
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> LG
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Samsung
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Vivo
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Oppo
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Motorola
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Redmi
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Oneplus
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="accordion-item">
                                <h4 className="accordion-header" data-bs-toggle="collapse" data-bs-target="#color" > Color  </h4>
                                <div className="accordion-collapse collapse " id="color" >
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0">
                                                <input className="checkbox-type" type="checkbox" /> Silver
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Black
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Gold
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> White
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Grey
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Space Grey
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Purple
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Green
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Red
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Blue
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> Aura Glow
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="accordion-item">
                                <h4 className="accordion-header" data-bs-toggle="collapse" data-bs-target="#screentype" > Screen Type </h4>
                                <div className="accordion-collapse collapse " id="screentype" >
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0">
                                                <input className="checkbox-type" type="checkbox" /> OLED
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="accordion-item">
                                <h4 className="accordion-header" data-bs-toggle="collapse" data-bs-target="#ram" > RAM  </h4>
                                <div className="accordion-collapse collapse " id="ram" >
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0">
                                                <input className="checkbox-type" type="checkbox" /> 2 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 3 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 4 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 6 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 8 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 10 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 12 GB
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="accordion-item">
                                <h4 className="accordion-header" data-bs-toggle="collapse" data-bs-target="#storage" > Storage </h4>
                                <div className="accordion-collapse collapse " id="storage" >
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0">
                                                <input className="checkbox-type" type="checkbox" /> 32 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 64 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 128 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 256 GB
                                                <br />
                                                <input className="checkbox-type" type="checkbox" /> 512 GB
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />

                        </div>
                        
                    </div>

                    {/* 2nd column */}
                    <div className="col-lg-10 vl">
                            
                        <h4 className="mx-4 my-2"> Hair Dryer - <small style={{fontSize: "20px", fontWeight: "400"}} >Best Prices</small>  </h4>

                            {
                                hair_dryer.map((m,hd)=>
                                {

                                    return(<>

                                        {/* 2nd column */}
                                        <div className="col-12" key={hd}>

                                            <div className="card border-0 ">
                                                <div className="row g-0">
                                                    <div className="col-md-3">
                                                        <img src={m.image} className="w-100 " alt="a" />
                                                        <div className="content">
                                                            <h4 style={{fontFamily: "monospace"}}> { m.stock_info } </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card-body">
                                                            <h3> {m.title} </h3>
                                                            <br/>
                                                            <p className="txt-money">
                                                                &#8377; {m.cost} 
                                                            <s className="pl-2 txt-original-money" > {m.original_cost} </s> 
                                                            <small className="txt-green px-3 txt-offf-money" > {m.discount} </small>
                                                            </p>
                                                            <Link className="btn btn-outline-danger px-3 buy-btn " 
                                                            onClick={() => setModalShow(true)} > {m.buy_now}  </Link>
                                                            <MyModal
                                                                show={modalShow}
                                                                onHide={() => setModalShow(false)}
                                                            />
                                                            <br/> <br />
                                                            <p className="card-text "><small className="text-muted">{m.updated_info}</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 py-3 "> 
                                                        <Link to="/add_to_cart" className="btn btn-danger px-3 my-3 buy-btn " > {m.add_cart} </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>

                                        </div>
                                        {/* 2nd column */}

                                    </>) 

                                })

                            }

                        </div>
                        {/* 2nd column */}

                </div>
            </div>

        </>
    )
}

export default Hair_dryer
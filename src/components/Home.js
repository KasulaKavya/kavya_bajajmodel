import React,{ useEffect ,useState } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import axios from 'axios'

import './home.css'


const url=" http://localhost:3043/home_images"

const Home=()=>
{

    const [home_images,setState]=useState([])
    

    useEffect( async ()=>
    {
        await axios.get(url).then((res)=>setState(res.data) )
    }
    ,[])


    return(
        <>
            {/* CONTAINER-FLUID */}
            <div className="container-fluid bg-body pb-3">

                {/* ROW */}
                <div className="row">
            
                    {/* RIGHT COLUMN*/}
                    <div className="col-12 ">

                        {/* CAROUSEL / slider*/}
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                src="../../images/slider0.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src="../../images/slider1.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../../images/slider1.png"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        {/* CAROUSEL / slider */}

                    </div>
                    {/* 1ST COLUMN */}   

                    {/* 2ND CONTAINER-FLUID */}
                    <div className="container-fluid">

                        {/* INNER ROW 1*/}
                        <div className="row ">

                            {/* INNER COLUMNS */}
                            {

                                home_images.map((x,index)=>
                                {
                                    return(<>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 col-xl-3 my-3 ">
                                            <div className="card " key={index} >
                                                <img src={x.image} alt="a" className="class-img-top mx-auto w-75 my-2"/>
                                                <div className="card-body text-center ">
                                                    <h4> {x.title} </h4>
                                                    <p className="pr-2"> 
                                                        {x.features} <br/> 
                                                        cost: &#8377; {x.cost} 
                                                        <s className="pl-2"> {x.original_cost} </s> 
                                                    </p>
                                                    <Link to="/" className="btn btn-primary "> {x.buy_now} </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                })
                            }
                            
                        </div>
                        
                    </div>
                
                </div>
                {/* ROW */}

            </div>
            {/* CONTAINER-FLUID */}

            
        </>
    )


}



export default Home;
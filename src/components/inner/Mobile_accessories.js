import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const url1=" http://localhost:3041/mobile_accessories"
const url2=" http://localhost:3042/brands"


class Mobile_accessories extends Component
{

    constructor(props)
    {
        super(props)

        this.state= 
        { 
            mobile_accessories:[],
            brands:[]
        }

    }


    componentDidMount()
    {
        axios.get(url1).then(res=>{ this.setState( { mobile_accessories : res.data } ) } )
        axios.get(url2).then(res=>{ this.setState( { brands : res.data } ) } )
    }


    render()
    {
        return(
            <>
                <div className="container-fluid mx-4">
                    <div className="row my-3 ">
    
                        {/* 1st column */}
                        <div className="col-lg-2 my-5 ">
    
                            {

                                this.state.brands.map((m,index)=>
                                {
                                    return(<>
                                        
                                        <div className="accordion my-1" key={index}>

                                            <div className="accordion-item">
                                                <h4 className="accordion-header" data-bs-toggle="collapse" data-bs-target="#brand" > {m.title}  </h4>
                                                <div className="accordion-collapse collapse " id="brand" >
                                                    <div className="accordion-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item border-0">
                                                                <input className="checkbox-type" type="checkbox" /> {m.name1}
                                                                <br />
                                                                <input className="checkbox-type" type="checkbox" /> {m.name2}
                                                                <br />
                                                                <input className="checkbox-type" type="checkbox" /> {m.name3}
                                                                <br />
                                                                <input className="checkbox-type" type="checkbox" /> {m.name4}
                                                                <br />
                                                                <input className="checkbox-type" type="checkbox" /> {m.name5}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                        </div>
                                        
                                    </>)
                                })

                            }
    
                        </div>
                        {/* 1st column */}


                        {/* 2nd column */}
                        <div className="col-lg-10 vl">
                            
                        <h4 className="mx-4 my-2"> Mobile & Accessories - <small style={{fontSize: "20px", fontWeight: "400"}} >Best Prices</small>  </h4>
                            
                            {

                                this.state.mobile_accessories.map((m,ma)=>
                                {

                                    return(<>

                                        {/* 2nd column */}
                                        <div className="col-12 " key={ma}>

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
                                                            <Link className="btn btn-outline-danger px-3 buy-btn "> {m.buy_now}  </Link>
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
                    {/* row */}

                </div>
                {/* container */}
                
            </>
        )
    }

}

export default Mobile_accessories
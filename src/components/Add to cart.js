import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import './add_to_cart.css'

const Add_to_cart = ()=>
{
    return(<>

        <div className="container my-5">
            <div className="row">
                <div className="col-lg-9 ">

                    <table className=" w-100 ">

                        <tr className="th-y" >
                            <th className="pl-5"> Product Name </th>
                            <th> Quantity </th>
                            <th> Price </th>
                            <th> Total </th>
                        </tr>

                        <tr>

                            <td>
                                <div className="cart-info" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAfr99Txyu5bK3Is-r4x0fFJrHHqGUvyJwg&usqp=CAU" 
                                    alt="a" />
                                    <div className="py-3" >
                                        <p> <b>Redmi Note 10</b> </p>
                                        <small className="txt-10 "> You Saved &#8377;4,500 on this Product </small>
                                        <br />
                                    </div>
                                </div>
                            </td>

                            <td>
                                <p className="mb-0 pl-2 "> <b>&#8377;20,499</b> </p>
                                <small className=" pl-4 "><s> &#8377;25,999</s></small>
                          
                            </td>

                            <td>
                                <input type="number" value="1" />
                            </td>

                            <td>
                                <b className="text-center"> &#8377;20,499</b>
                            </td>

                        </tr>

                    </table>


                    <Link to="/" classname="mr-5 px-2 text-black"><FontAwesomeIcon icon={faTrashAlt} className="icon text-danger " /> Remove List Item </Link>
                    <Link to="/" classname="ml-5 px-2 text-black"><FontAwesomeIcon icon={faHeart} className="icon text-danger " /> Move to Wish List</Link>
                    

                </div>

                <div className="col-lg-3">
                    
                    <div className="card">

                        <h6 className="text-left text-primary px-3 pb-1 pt-3">Order Summary</h6>

                        <div className="card-body pt-0 ">

                            <table>
                                <tr>
                                    <td> Sub Total </td>
                                    <td className="pl-5"> &#8377;20,499 </td>
                                </tr>
                                <tr>
                                    <td className="pb-3"> Delivery Fee </td>
                                    <td className="pl-5 pb-3 "> Free </td>
                                </tr>
                                <tr className="tr-top">
                                    <td className="pt-3"> Total Price </td>
                                    <td className="pl-5 pt-3"> <b>&#8377;20,499</b> </td>
                                </tr>
                            </table>

                        </div>
                    
                    </div>

                </div>
            </div>
        </div>

    </>)
}

export default Add_to_cart
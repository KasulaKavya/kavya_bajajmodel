import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCartArrowDown, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'

//css file
import './nav.css'



const Header=()=>
{

    return(<>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg bg-l mb-0">

            <div className=" collapse navbar-collapse justify-content-left"  >

                <ul className="navbar-nav">

                    <li className="nav-item px-2 ml-5 ">
                        <Link to="/home" className="nav-link txt-c " >Home</Link>
                    </li>

                    <li className="nav-item px-2">
                        <Link to="/about" className="nav-link txt-c ">About</Link>
                    </li>

                    <li className="nav-item px-2">
                        <Link to="/services" className="nav-link txt-c ">Services</Link>
                    </li>

                    <li className="nav-item px-2 mr-5 ">
                        <Link to="/user" className="nav-link txt-c ">Users</Link>
                    </li>

                </ul>

            </div>
                
            <div className="ml-5 mr-3">
                <ul className="navbar-nav">
                    
                    <form className="d-flex border-0 mx-5 px-5 ">
                        <input className="form-control m-2 " type="search" placeholder="Search" />
                        <button className="btn btn-success p-1 w-25" type="submit">Search</button>
                    </form>

                    <li className="nav-item px-1 vl ">
                        <Link to="/add_to_cart" className="nav-link txt-c "> 
                            <FontAwesomeIcon icon={faCartArrowDown} className=" fnt-i " />
                        </Link>
                    </li>

                    <li className="nav-item px-1 vl ">
                        <Link to="/login" className="nav-link txt-c ">
                            <FontAwesomeIcon icon={faUserCircle} className=" fnt-i " />
                        </Link>
                    </li>

                    <li className="nav-item px-1 vl ">
                        <Link to="/contact" className="nav-link txt-c ">
                            <FontAwesomeIcon icon={faEnvelope} className=" fnt-i " />
                        </Link>
                    </li>

                </ul>
            </div>

        </nav>
        {/* NAVBAR */}

        


        {/* NAV */}
        <ul className="nav bg-dark ">

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Mobiles </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/smartphones">Smart Phones</Link></li>
                    <li><Link className="dropdown-item" to="/mobile accessories">Mobile Accessories</Link></li>
                    <li><Link className="dropdown-item" to="/smart watches">Smart Watches</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Laptops {"&"} Accessories </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/laptops">Laptops</Link></li>
                    <li><Link className="dropdown-item" to="/ipads">iPads</Link></li>
                    <li><Link className="dropdown-item" to="/laptop accessories">Laptop Accessories</Link></li>
                    <li><Link className="dropdown-item" to="/printers">Printers</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Home Entertainments </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/oled tv">OLED TV</Link></li>
                    <li><Link className="dropdown-item" to="/led tv">LED TV</Link></li>
                    <li><Link className="dropdown-item" to="/smart tv">Smart TV</Link></li>
                    <li><Link className="dropdown-item" to="/qled tv">QLED TV</Link></li>
                    <li><Link className="dropdown-item" to="/home theatre">Home Theatre</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Home Appliances </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/air conditioner">Air Conditioner</Link></li>
                    <li><Link className="dropdown-item" to="/air cooler">Air Cooler</Link></li>
                    <li><Link className="dropdown-item" to="/refrigerators">Refrigerator</Link></li>
                    <li><Link className="dropdown-item" to="/washing machines">Washing Machines</Link></li>
                    <li><Link className="dropdown-item" to="/geysers">Geysers</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Kitchen Appliances </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/gas stoves">Gas Stoves {"&"} Hobs</Link></li>
                    <li><Link className="dropdown-item" to="/rice cookers">Rice Cookers</Link></li>
                    <li><Link className="dropdown-item" to="/juicers">Juicers</Link></li>
                    <li><Link className="dropdown-item" to="/induction cooktop">Induction Cooktop</Link></li>
                    <li><Link className="dropdown-item" to="/mixers">Mixer Grinder</Link></li>
                    <li><Link className="dropdown-item" to="/kettles">kettles</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown ">
                <Link className="text-white dropdown-toggle p-3 txt-c" type="button" data-bs-toggle="dropdown" > Personal Care </Link>
                <ul className="dropdown-menu" >
                    <li><Link className="dropdown-item" to="/trimmer">Trimmer {"&"} Shaver</Link></li>
                    <li><Link className="dropdown-item" to="/hair dryer">Hair Dryer</Link></li>
                    <li><Link className="dropdown-item" to="/hair straightener">Hair Straightener</Link></li>
                </ul>
            </li>

        </ul>
        {/* NAV */}

    </>)


}


export default Header;
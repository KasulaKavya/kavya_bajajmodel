import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './login.css'



class Login extends Component
{

   
    constructor(props)
    {
        super(props)
        this.state={email:'', password:''}
    }


    // input textbox collection
    inputHandler=(e)=>
    {
        this.setState({ ...this.state , [e.target.name] : e.target.value } )
    }


    Registration_fun=()=>
    { 
        return(<> <Link to={'/registration'} > </Link> </>)
    }

    
    
    render()
    {
         const {email,password}=this.state 

        return(
            <>
                
                <div className="container " style={{ width:"60%"}}>
                    <div className="row ">
                        <div className="col-12">
                            <div className="card bg-light">

                                <div className="card-title "><h2 className="mt-4 text-center"> Log In / Sign In  </h2></div>
                                
                                <div className="card-body">

                                    <form className="border-0 mx-auto "  >
                                        <div className="imgcontainer">
                                        <img src="https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png" 
                                        className="w-90 mt-0" alt="a" />
                                        </div>
                                    
                                        <div className="container w-50">
                                        <label for="uname"><b>Username</b></label>
                                        <input className="form-control mb-2" type="email" 
                                            value={email} name="email" onChange={ this.inputHandler.bind(this)} required />
                                    
                                        <label for="psw"><b>Password</b></label>
                                        <input className="form-control mt-0" type="password" 
                                            value={password} name="password" onChange={ this.inputHandler.bind(this)}  />
                                    
                                        <button to="/home" type="submit">Login</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                                        </label>
                                        </div>
                                    
                                        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                                            <Link to={'/registration'} className="btn btn-primary mr-5 " > Create Account </Link>
                                            <button type="button" className="btn btn-danger cancel_btn ">Cancel</button>
                                            <span className="psw">Forgot <Link to='/a' >password?</Link></span>
                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
            </>
        )
    }
    
}


export default Login;
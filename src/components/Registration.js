import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const url="http://localhost:3004/users"

const Registration =()=>
{

    const [users,setUsers]=useState(
        {
            name:"",
            email:"",
            location:"",
            course:"",
            phone:""
        }
    )

    
    // input textbox collection
    const inputHandler=(e)=>
    {
        setUsers({ ...users , [e.target.name] : e.target.value } )
    }


    //Get form data after submit
    const submitHandler = async (e)=>
    {
        //control page loading after submit Formdata
        e.preventDefault()
        
        //alert( JSON.stringify(regdetails) ); 

        await axios.post(url,users).then( ()=> users.history.push('/users'))
    
    }


    // destructuring
    const {name,email,location,course,phone}=users;
    
    return(<>

        <div className="contianer shadow p-5">

            <h2 className="text-center py-3"> User Registration</h2>

            <form className="mx-auto border-0 w-50" onSubmit={ e => {submitHandler(e) } }>

                <div className="form-group p-1"> 
                    <label>Name</label>
                    <input className="form-control" type="text"
                    name="name" value={name}
                    onChange={e => inputHandler(e) } required />
                </div>

                <div className="form-group "> 
                    <label>Email</label>
                    <input className="form-control" type="text"
                    name="email" value={email}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group "> 
                    <label>Location</label>
                    <input className="form-control" type="text" 
                    name="location" value={location}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group "> 
                    <label>Course</label>
                    <input className="form-control" type="text"
                    name="course" value={course}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group "> 
                    <label>Phone</label>
                    <input className="form-control" type="text"
                    name="phone" value={phone}
                    onChange={e => inputHandler(e)} required />
                </div>

                <button className="btn btn-success mb-3 mr-5 " type="submit"> SUBMIT </button>

                <Link to={`/login`} className="btn btn-info justify-content-center  " > GO BACK </Link>

            </form>

        </div>

    </>)

    
}


export default Registration;
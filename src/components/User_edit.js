import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link,useHistory,useParams} from 'react-router-dom'


const url="http://localhost:3004/users"

const User_edit =()=>
{

    const history=useHistory()
    const {id}=useParams()


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


    useEffect(
        async ()=>
        {
            await axios.get(`${url}/${id}`).then( (res)=>{ setUsers(res.data) } )

        }
    ,[])

    //Get form data after submit
    const submitHandler = async (e)=>
    {
        //control page loading after submit Formdata
        e.preventDefault()
        
        //alert( JSON.stringify(regdetails) ); 

        await axios.put(`${url}/${id}`,users).then( ()=> history.push('/users'))
    
    }


    // destructuring
    const {name,email,location,course,phone}=users;
    
    return(<>

        <div className="contianer ">

            <h2 className="text-center py-3"> User Registration</h2>

            <form className="mx-auto w-50 " onSubmit={ e => {submitHandler(e) } }>

                <div className="form-group p-1"> 
                    <label>Name</label>
                    <input className="form-control" type="text"
                    name="name" value={name}
                    onChange={e => inputHandler(e) } required />
                </div>

                <div className="form-group p-1 "> 
                    <label>Email</label>
                    <input className="form-control" type="text"
                    name="email" value={email}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group p-1 "> 
                    <label>Location</label>
                    <input className="form-control" type="text" 
                    name="location" value={location}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group p-1 "> 
                    <label>Course</label>
                    <input className="form-control" type="text"
                    name="course" value={course}
                    onChange={e => inputHandler(e)} required />
                </div>

                <div className="form-group p-1 "> 
                    <label>Phone</label>
                    <input className="form-control" type="text"
                    name="phone" value={phone}
                    onChange={e => inputHandler(e)} required />
                </div>

                <button className="btn btn-primary mb-3 mr-5" type="submit"> Submit </button>

                <Link to={`/login`} className="btn btn-info justify-content-center mb-3 ml-5 " > GO BACK </Link>

            </form>

        </div>
            

    </>)

    
}


export default User_edit;
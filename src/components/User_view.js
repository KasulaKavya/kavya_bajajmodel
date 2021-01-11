import React, { useState,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'



const url="http://localhost:3004/users";


const User_view = () =>
{

    const {id}=useParams()
    
    const [users,setUsers]=useState([])

    useEffect(
        async ()=>{
           await axios.get(`${url}/${id}`).then((res)=> setUsers(res.data))
        }
    ,[])
   
    
    const { name, course, email, phone, location }= users

    return(
        <>
            <div className="container py-5 my-5 w-50 shadow ">

                <h2 className="text-center "> User Id : {id}  </h2>

                <div className="card mx-5 pt-5 pb-2 border-0">
                    <ul>
                        <li> {name} </li>
                        <li> {email} </li>
                        <li> {course} </li>
                        <li> {phone} </li>
                        <li> {location} </li>
                    </ul>
                    
                </div>

                <Link to={`/user`} className="btn btn-primary mx-5 p-1" > GO BACK </Link>

            </div> 
        </>
    )


}


export default User_view;
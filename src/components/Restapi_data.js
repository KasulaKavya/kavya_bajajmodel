import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const url="http://localhost:3004/users"

const RestapiData = ()=>
{

    const [users,setUsers]=useState([])

    useEffect( async ()=>{ 
            await axios.get(url).then((res)=>setUsers(res.data) )
        }
    ,[])


    // delete operation function
    const Delete = async (id)=>
    {
        
        await axios.delete(`${url}/${id}`); //deletes selected id      
        
    }

    
    return(<>
        <div className="container justify-content-center mb-5 ">

            <Link to="/registration" className="btn btn-info mb-5" > Add User </Link>

            <table className="table table-bordered table-dark  text-center" >

                <thead className="table table-bordered table-light" >
                    <tr>
                        
                        <th>ID NO</th>
                        <th>NAME</th>
                        <th>EMAIL</th> 
                        <th>LOCATION</th>
                        <th colSpan="3">ACTION</th>
                    </tr>
                </thead>

                <tbody >
                    {
                        users.map((x,index)=>{
                            return(<>
                                <tr key={index}>
                                    
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td> <Link to={`user/view/${x.id}`} className="btn btn-primary w-50 ">View</Link> </td>
                                    <td> <Link to={`user/edit/${x.id}`} className="btn btn-info w-75">Edit</Link></td>
                                    <td> <button onClick={ ()=> Delete(x.id) } className="btn btn-danger w-75" >Delete</button> </td>
                                </tr>
                            </>)
                        })
                    }
                </tbody>

            </table>

        </div>
        
    </>)

    
    

}


export default RestapiData;
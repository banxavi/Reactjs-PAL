import React, { useState, useEffect } from 'react';
import './Employee.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Employee() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState(false);

    const axiosPost = async () => {
        axios.get("http://127.0.0.1:5000/emp")
        .then(res => {
          const employee = res.data;
          setPosts(employee);
        })
        .catch(error => console.log(error));
    };
    
      useEffect(() => {
        axiosPost();
      }, []);
      
 
      const onDelete = (id) => {
        axios
        .delete(`http://127.0.0.1:5000/delete/${id}`)
        .then(function (respone) {
          console.log(respone);
          setStatus("Delete Successful")
          navigate("/Employee");
        })
        .catch((error) => console.log(error));
    }

    return (
        
        <div className='Employee'>
        <a className='logout' href={"/"}>LOGOUT</a>
         <h1 className='title'>EMPLOYEE TABLE</h1>
         <a href={"home"}>ADD EMPLOYEE</a>
             <table >
                 <thead>
                 <tr>
                     <th>ID </th>
                     <th>AVATAR</th>
                     <th>NAME</th>
                     <th>EMAIL</th>
                     <th>PHONE</th>
                     <th>ADDRESS</th>
                     <th style={{color: 'yellow'}}>INTERACT</th>
                 </tr>
                 </thead>
            {posts.map((posts, index) => {
                return(
                    <tbody>
                    <tr  key={index}> 
                    <td >{posts.id}</td>
                    <td ><img src={posts.image} alt={"images"} /></td>
                    <td >{posts.name}</td>
                    <td >{posts.email}</td>
                    <td >{posts.phone}</td>
                    <td >{posts.address}</td>
                    <td ><button>VIEW</button> <button >EDIT</button><button onClick={()=>onDelete(posts.id)}>DELETE</button></td >
                    </tr>
                    </tbody>
            )})}
                    <p style={{ color: "green" }}>{status}</p>
            </table>

        </div>
    )
                }

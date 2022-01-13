import { useState, useEffect } from 'react';
import './Employee.css';
import axios from 'axios';

export default function Employee() {
    const [posts, setPosts] = useState([]);

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
 
    
    return (
        
        <div className='Employee'>
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
                    <td ><img src={posts.image} alt={""} /></td>
                    <td >{posts.name}</td>
                    <td >{posts.email}</td>
                    <td >{posts.phone}</td>
                    <td >{posts.address}</td>
                    <td ><button >VIEW</button> <button >EDIT</button><button >DELETE</button></td >
                    </tr>
                    </tbody>
             
            )})}
            </table>
        </div>
    )
}

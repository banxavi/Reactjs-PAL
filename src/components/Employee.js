import { useState, useEffect } from 'react';
import './Employee.css';

export default function Employee() {
    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
        const response = await fetch("http://127.0.0.1:5000/emp");
        const data = await response.json();
        setPosts(data);
      };
    
      useEffect(() => {
        fetchPost();
      }, []);
 
    
    return (
        
        <div className='Employee'>
         <h1 className='title'>EMPLOYEE TABLE</h1>
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
                    <td>{posts.id}</td>
                    <td><img src={posts.image} alt={""} /></td>
                    <td >{posts.name}</td>
                    <td >{posts.email}</td>
                    <td >{posts.phone}</td>
                    <td >{posts.address}</td>
                    <td ><button >ADD</button> <button >EDIT</button><button >DELETE</button></td >
                    </tr>
                    </tbody>
             
            )})}
            </table>
        </div>
    )
}

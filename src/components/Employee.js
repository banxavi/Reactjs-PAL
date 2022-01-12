import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Employee() {
    const navigate = useNavigate()
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
        <div className="employee-container">
            {posts.map((posts, index) => (
                <div key={index}>
                    <img className="employee-img" src={posts.image} alt={""} />
                    <p style={{ fontSize: "20px" }}>Position : {posts.email}</p>
                    <p style={{ fontSize: "15px" }}>Name : {posts.name}</p>
                    <p style={{ fontSize: "15px" }}>Age :{posts.phone}</p>
                    <p style={{ fontSize: "15px" }}>Address : {posts.address}</p>
                    <button className="employee-btnDetails" >ADD</button>
                    <button className="employee-btnEdit" >EDIT</button>
                    <button className="employee-btnRemove" >DELETE</button>
                </div>
            ))}
        </div>
    )
}
import React, { useState, useEffect } from "react";
import "./Employee.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Employee() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState("");

  const axiosGet = async () => {
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        const employee = res.data;
        setPosts(employee);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosGet();
  }, []);

  const onDelete = (id) => {
    let choose = window.confirm("Are you sure you want delete employee with: " +id+ "?");
    if (choose) {
      axios
        .delete(`http://127.0.0.1:5000/delete/${id}`)
        .then(function (respone) {
          console.log(respone);
          setMessages("Delete Successful");
          navigate("/Employee");
        })
        .catch((error) => console.log(error));
    }
  };

  const data_edit = {
    address: 'address An Ninh Tay',
    email: 'email Tuy An',
    name: "Nhat ban",
    phone: 'phone',
    image: 'image',
  };

  const onEdit = (id) => {
      axios
        .put(`http://127.0.0.1:5000/update/${id}`, data_edit)
        .then(function (respone) {
          console.log(respone);
          setMessages("Updated Successful");
          navigate("/Employee");
        })
        .catch((error) => console.log(error));
  };

  return (
    <div className="Employee">

      <a className="logout" href={"/"}>
        LOGOUT
      </a>
      <h1 className="title">EMPLOYEE TABLE</h1>
      <a href={"home"}>ADD EMPLOYEE</a>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AVATAR</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th style={{ color: "yellow" }}>ACTION</th>
          </tr>
        </thead>
        {posts.map((posts, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>{posts.name}</td>
                <td>
                  <img src={posts.image} alt={"images"} />
                </td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
                <td>{posts.address}</td>
                <td>
                  <Button variant="outline-info">VIEW</Button>
                  <Button variant="outline-warning" onClick={() => onEdit(posts.id)}>EDIT</Button>
                  <Button variant="outline-danger" onClick={() => onDelete(posts.id)}>DELETE</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <p style={{ color: "green" }}>{messages}</p>
    </div>
  );
}

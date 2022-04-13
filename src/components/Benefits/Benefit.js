import React, { useState, useEffect } from "react";
import "../Employee.css";
import axios from "axios";
import ModalAdd from "../ModalAdd";
import Footer from "../Footer";
import Table_Employee from "../Table_Employee";
import Header_Component from "../Header_Component"

export default function Benefit() {
  const [posts, setPosts] = useState([]);
  const [isReload, setIsReload] = useState(false);

  // const jsonPosts = JSON.stringify(posts)
  // localStorage.setItem("employee", jsonPosts)

  const axiosGet = async () => {
    axios
      .get("http://127.0.0.1:5000/benefit")
      .then((res) => {
        const employee = res.data;
        setPosts(employee);

      })
      .catch((error) => console.log(error));
  };        

  useEffect(() => {
      axiosGet();
      console.log(posts)
  }, [isReload]);

  const superReload = () => {
      setIsReload(!isReload)
  }

  return (
    <>
    <Header_Component/>
    <div className="Employee">
     <div style={{marginTop: "150px",marginRight: "50px", width: "230px", height: "600px"}}>
      </div>
      <div>
      <h1 className="title" style={{  color: 'darkturquoise'}}>BENEFIT TABLE</h1>
      <div className="addemployee">
        <ModalAdd superReload={superReload}/>
        </div>
      <Table_Employee  superReload={superReload}/>
      <Footer></Footer>
      </div>
    </div>
    </>
  );
}

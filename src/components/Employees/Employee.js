import React, { useState, useEffect } from "react";
import { SERVER } from "../API/api_url";
import axios from "axios";
import ModalAdd from '../Common/ModalAdd';
import Table_Employee from "../Common/Table_Employee";
import Header_Component from '../Layouts/Header_Component'
import { useLocation } from "react-router-dom";

export default function Employee() {
  const [posts, setPosts] = useState([]);
  const [isReload, setIsReload] = useState(false);

  // const jsonPosts = JSON.stringify(posts)
  // localStorage.setItem("employee", jsonPosts)

  var a = useLocation()
  var url_api = a?.pathname.split('/').pop()

  const axiosGet = async () => {
    axios
      .get(`${SERVER}/${url_api}`)
      .then((res) => {
        setPosts(res.data);

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
      <h1 className="title" style={{  color: 'darkturquoise'}}>EMPLOYEE TABLE</h1>
      <div className="addemployee">
        <ModalAdd superReload={superReload}/>
        </div>
      <Table_Employee url_api={url_api}  superReload={superReload}/>
      {/* <Footer></Footer> */}
      </div>
    </div>
    </>
  );
}

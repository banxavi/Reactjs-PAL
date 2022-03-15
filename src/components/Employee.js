import React, { useState, useEffect } from "react";
import "./Employee.css";
import axios from "axios";
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import ModalSearch from './ModalSearch'
import MenuLeft from "./MenuLeft";

export default function Employee() {
  const [posts, setPosts] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [search, setSearch] = useState("");

  const axiosGet = async () => {
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        const employee = res.data;
        setPosts(employee);
      })
      .catch((error) => console.log(error));
  };

  const onSearch = async () => {
    axios
      .get(`http://127.0.0.1:5000/emp/${search}`)
      .then(function (respone) {
        console.log(respone);
        const info_search = respone.data;
        setPosts(info_search);
      })
      .catch((error) => console.log(error));
  };

  const pull_data = (data) => {
    setSearch(data)     // LOGS DATA FROM CHILD
  }

  useEffect(() => {
      axiosGet();
  }, [isReload]);

  const superReload = () => {
      setIsReload(!isReload)
  }

  return (
    <div className="Employee">
     <div style={{marginTop: "150px",marginRight: "50px", width: "230px", height: "600px"}}>
      <MenuLeft/>
      </div>
      <div>
      <h1 className="title">EMPLOYEE TABLE</h1>
      <div className="addemployee">
        <ModalAdd superReload={superReload}/>
        </div>
      <div className="searchemployee">
      <ModalSearch info_search={pull_data} onSearch={onSearch}/>
      </div>
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
            <tbody key={index}>
              <tr key={index}>
                <td>{posts.name}</td>
                <td>
                  <img src={posts.image} alt={"images"} />
                </td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
                <td>{posts.address}</td>
                <td>
                  <ModalEdit postId={posts.id} superReload={superReload}></ModalEdit>
                  <ModalDelete postId={posts.id} postEmail={posts.email}  superReload={superReload}></ModalDelete>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
    </div>
  );
}

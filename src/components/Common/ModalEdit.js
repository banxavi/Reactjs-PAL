import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { SERVER } from "../API/api_url";

export default function ModalEdit(props) {
  const postId = props
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState([]);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (show){
      const getAxios = async () =>{
        axios
          .get(`${SERVER}/employee/edit/${postId['postId']}`)
          .then((res) => {
            setPosts(res.data);
          })
          .catch((error) => console.log(error));
      }
      getAxios();
    }
  },[show]);

  const handleShow = () => {
    setShow(true);
  };
  
  const data_edit = {
    name: name || posts.name,
    address: address || posts.address,
    phone: phone || posts.phone,
    position: position || posts.position
  };

  const submitEdit = () => {

    axios
      .put(`${SERVER}/update/${postId['postId']}`, data_edit)
      .then(function (respone) {
        console.log(respone);
        setShow(false);
        props.superReload()
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
      EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-container">
            <label>Name</label>
            <input required="required" type="text" defaultValue={posts.name || ""}
            onChange={(text) => setName(text.target.value)}></input>

            <label>
              Email
              <br />
            </label>
            <input readOnly type="email" value={posts.email} />
              <label>
              Position
              <br />
            </label>
            <select 
             id='select_pst'
             readOnly='true'
            > 
                <option value={posts.position}>{posts.position}</option>
              ))
              
            </select>
            <label>
              Address
              <br />
            </label>
            <input required="required" type="text" defaultValue={posts.address || ""}
            onChange={(text) => setAddress(text.target.value)}/>
            <label>
              Phone
              <br />
            </label>
            <input required="required" type="number" defaultValue={posts.phone || ""}
            onChange={(text) => setPhone(text.target.value)} />
          </div> 
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submitEdit(props)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

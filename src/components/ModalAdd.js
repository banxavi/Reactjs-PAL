import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

export default function ModalAdd(props) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setUploadImage] = useState("");

  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const axiosGet = async () => {
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        const account = res.data;
        setPosts(account);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosGet();
  }, []);
  const data_add = {
    address: address,
    email: email,
    name: name,
    password: "123456",
    phone: phone,
    image: images,
  };
  
  const upload_image = (images) =>{
    console.log("cha", images)
    setUploadImage(images)
  }
  const submitAdd = () => {
    let emailValue = email;
    let exists = false;

    for (var i = 0; i < posts.length; i++) {
      if (emailValue === posts[i].email) {
        exists = true;
        break;
      }
    }
    if (exists === true) {
        setStatus(false);
        setMessage("*Email is exists");
  
    }
    else{
    axios
      .post("http://127.0.0.1:5000/add", data_add)
      .then(function (respone) {
        console.log(respone);
        setStatus(true);
        setMessage("Add Successful");
        setShow(false);
        props.superReload()
      })
      .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-container">
            <label>Name</label>
            <input required="required" type="text" value={name}
            onChange={(text) => setName(text.target.value)}></input>

            <label>
              Email
              <br />
            </label>
            <input required="required" type="email"   value={email}
            onChange={(text) => setEmail(text.target.value)} />
            <label>
              Address
              <br />
            </label>
            <input required="required" type="text" value={address}
            onChange={(text) => setAddress(text.target.value)}/>
            <label>
              Phone
              <br />
            </label>
            <input required="required" type="number" value={phone}
            onChange={(text) => setPhone(text.target.value)} />
              <UploadAndDisplayImage upload_image={upload_image}/>
          </div>
          {status === true ? (
        <p style={{ color: "green" }}>{message}</p>
      ) : (
        <p style={{ color: "red" }}>{message}</p>
      )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submitAdd()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

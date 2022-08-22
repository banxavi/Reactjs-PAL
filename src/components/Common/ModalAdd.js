import React, { useState, useEffect } from "react";
import { Modal, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { SERVER } from "../API/api_url";
import { alertTitleClasses } from "@mui/material";

export default function ModalAdd(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setUploadImage] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState("DEVELOPER");
  const [posts, setPosts] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);
  const [animation, setAnimation] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedOption = [
    "DEVELOPER",
    "TESTER",
    "TEAMLEAD",
    "SME",
    "PM",
    "DIRECTOR",
  ];
  const axiosGet = async () => {
    axios
      .get(`${SERVER}/employee`)
      .then((res) => {
        setPosts(res.data);
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
    position: selectValue,
    image: images,
  };

  const upload_image = (images) => {
    setUploadImage(images);
  };
  const submitAdd = () => {
    //  👇️ clear all input values in the form
     setName('');
     setEmail('');
     setAddress('');
     setUploadImage('');
     setPhone('');
    let emailValue = email;
    let exists = false;
    setBtnDisable(true);
    setAnimation("border");
    for (var i = 0; i < posts.length; i++) {
      if (emailValue === posts[i].email) {
        exists = true;
        break;
      }
    }
    if (exists === true) {
      setStatus(false);
      setMessage("*Email is exists");
      setAnimation("");
      setBtnDisable(false);
    } else {
      axios
        .post(`${SERVER}/add`, data_add)
        .then(function (respone) {
          setStatus(true);
          setShow(false);
          props.superReload();
          alert("Add successfully");
        })
        .catch((error) => console.log(error))
        .finally(() => setAnimation(""), setBtnDisable(false));
    }
  };

  const handleAddrTypeChange = (e) => {
    setSelectValue(selectedOption[e.target.value]);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ margin: "10px 0" }}
      >
        Add new employee
      </Button>

      <Modal show={show} onHide={handleClose} style={{ margin: "100px 0 0 0" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-container">
            <label>Name</label>
            <input
              required="required"
              type="text"
              value={name}
              onChange={(text) => setName(text.target.value)}
            ></input>

            <label>
              Email
              <br />
            </label>
            <input
              required="required"
              type="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <label>
              Position
              <br />
            </label>
            <select id="select_pst" onChange={(e) => handleAddrTypeChange(e)}>
              {selectedOption.map((o, key) => (
                <option key={key} value={key}>
                  {o}
                </option>
              ))}
            </select>
            <label>
              Address
              <br />
            </label>
            <input
              required="required"
              type="text"
              value={address}
              onChange={(text) => setAddress(text.target.value)}
            />
            <label>
              Phone
              <br />
            </label>
            <input
              required="required"
              type="number"
              value={phone}
              onChange={(text) => setPhone(text.target.value)}
            />
            <UploadAndDisplayImage upload_image={upload_image} />
          </div>
          {status === false ? (
            <p style={{ color: "red" }}>{message}</p>
          ) : (
            <p>{message}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={btnDisable} variant="primary" onClick={submitAdd}>
            <Spinner
              as="span"
              animation={animation}
              size="sm"
              role="status"
              aria-hidden="false"
            />
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

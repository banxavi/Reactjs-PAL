import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { SERVER } from "../API/api_url";

export default function ModalEdit_Benefit(props) {
  const postId = props
  console.log(postId)
  const [experiences, setExperiences] = useState("");
  const [insuarance, setInsuarance] = useState("");
  const [lastsalary, setLastSalary] = useState("");
  const [currentsalary, setCurrentSalary] = useState("");
  const [patoeic, setPaToeic] = useState("");
  const [paperform, setPaPerform] = useState("");


  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState([]);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (show) {
      const getAxios = async () => {
        axios
          .get(`${SERVER}/benefit/edit/${postId['postId']}`)
          .then((res) => {
            setPosts(res.data);
          })
          .catch((error) => console.log(error));
      }
      getAxios();
    }
  }, [show]);

  const handleShow = () => {
    setShow(true);
  };

  const data_edit = {
    experiences: experiences || posts.experiences,
    insuarance: insuarance || posts.insuarance,
    last_salary: lastsalary || posts.last_salary,
    current_salary: currentsalary || posts.current_salary,
    PA_Toeic: patoeic || posts.PA_Toeic,
    PA_Perform: paperform || posts.PA_Perform,
  };

  console.log(data_edit)
  const submitEdit = () => {

    axios
      .put(`${SERVER}/update/benefit/${postId['postId']}`, data_edit)
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
          <Modal.Title>Update Benefit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-container">
            <label>Name</label>
            <input readOnly required="required" type="text" defaultValue={posts.name || ""}></input>

            <label>
              Experiences Year
              <br />
            </label>
            <input required="required"  type="text" defaultValue={posts.experiences || ""} onChange={(text) => setExperiences(text.target.value)} />

            <label>
              Insuarance/Month
              <br />
            </label>
            <input required="required"  type="text" defaultValue={posts.insuarance || ""} onChange={(text) => setInsuarance(text.target.value)} />

            <label>
              Last salary
              <br />
            </label>
            <input required="required" type="text" defaultValue={posts.last_salary || ""}
              onChange={(text) => setLastSalary(text.target.value)} />
            <label>
              PA Toeic
              <br />
            </label>
            <input required="required" type="number" defaultValue={posts.PA_Toeic || ""}
              onChange={(text) => setPaToeic(text.target.value)} />

            <label>
              PA Perform
              <br />
            </label>
            <input required="required" type="text" defaultValue={posts.PA_Perform || ""}
              onChange={(text) => setPaPerform(text.target.value)} />

            <label>
              Current salary
              <br />
            </label>
            <input required="required" type="text" defaultValue={posts.current_salary || ""}
              onChange={(text) => setCurrentSalary(text.target.value)} />


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

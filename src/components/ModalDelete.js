import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function ModalDelete(props) {
  const postId = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const onDelete = () => {
      axios
        .delete(`http://127.0.0.1:5000/delete/${postId['postId']}`)
        .then(function (respone) {
          console.log(respone);
          setShow(false);
          props.superReload()
        })
        .catch((error) => console.log(error));
  };

  const handleShow = () => {
    setShow(true);
  };
  

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
      DELETE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete employee: <h4 style={{color:'red'}}>{postId['postEmail']}</h4>  </Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="danger" onClick={() => onDelete(props)}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

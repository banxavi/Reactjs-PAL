import React, {useState} from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertDismissible() {
    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="success">
        <Alert.Heading>Successful</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    );
  }

  
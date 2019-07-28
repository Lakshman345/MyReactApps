import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = props => {
  console.log(props.isApiError);
  return (
    <React.Fragment>
      <Modal show={props.isApiError} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check your network and try again</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ErrorModal;

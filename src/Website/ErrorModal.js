import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap for modals

const ErrorModal = ({ show, handleClose, errorMessage }) => {
  return (
    <Modal className="mt-5" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;

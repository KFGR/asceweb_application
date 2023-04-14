import React, { useState } from "react";
import {Modal, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CardWithModal = ({
  
  modalImageAlt,
 
  modalTitle,
  modalDetails,
  modalImageSrc
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div >
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
     
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={modalImageSrc}
            alt={modalImageAlt}
            style={{ width: "100%", height: "auto" }}
          />
          <p>{modalDetails}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary">Join!</Button>
        </Modal.Footer>
      </Modal>
    </div>

    




    //Below is code that will not work

    // <div className="card">

    //   <div className="card" onClick={handleShow}>
    //     <Image src={modalImageSrc} alt={modalImageAlt} className="card-img-top" />
    //   </div> 
     
    //   <Modal show={showModal} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>{modalTitle}</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <Image
    //         src={modalImageSrc}
    //         alt={modalImageAlt}
    //         style={{ width: "100%", height: "auto" }}
    //       />
    //       <p>{modalDetails}</p>
    //     </Modal.Body>
    //   </Modal>
    // </div>
    
  );
};

export default CardWithModal;

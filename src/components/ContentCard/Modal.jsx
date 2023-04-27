import React, { useState } from "react";
import {Modal, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
//import ContentCard from "./ContentCard"; //trying to make the form show

const CardWithModal = ({
  
  modalImageAlt,
 
  modalTitle,
  modalDetails,
  modalImageSrc,
  handleModalOpen
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
          {/* line below here was added to try to make this modal's button open the form component */}
          {/* <div>id = "modal-body"</div> */}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Close</Button>
            {/* <Button variant="primary" onClick={handleModalOpen}>
              Join!
            </Button> 
            THIS WAS COMMENTED OUT BECAUSE I COULDN'T GET THIS BUTTON TO OPEN THE FORM. DECIDED TO PLACE FORM UNDER CARDS - Alejandro*/}
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

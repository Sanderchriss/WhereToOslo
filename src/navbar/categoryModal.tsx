import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Cafecheckbox } from "../cafe/cafeCheckBox";
import { Restaurantcheckbox } from "../restaurant/restaurantCheck";
import { Drinkcheckbox } from "../drink/drinkCheck";
import { Storecheckbox } from "../store/storeCheckbox";
import { Activitycheckbox } from "../activity/activityCheckbox";

function CategoryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Categories
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Pick a category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cafecheckbox />
          <Storecheckbox />
          <Activitycheckbox />
          <Drinkcheckbox />
          <Restaurantcheckbox />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoryModal;

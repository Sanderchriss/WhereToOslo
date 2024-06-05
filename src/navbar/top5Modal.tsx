import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const articles = [
  { title: "Article 1", content: "This is the content of Article 1." },
  { title: "Article 2", content: "This is the content of Article 2." },
  { title: "Article 3", content: "This is the content of Article 3." },
];

const Top5Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show Articles
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Articles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {articles.map((article, index) => (
            <div key={index}>
              <h4>{article.title}</h4>
              <p>{article.content}</p>
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Top5Modal;

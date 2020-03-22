import React from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

function DeleteModal({ isModalOpen, toggleModal }) {
  function notify() {
    toast("Test");
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
      >
        <button onClick={toggleModal}>close</button>
        <button onClick={notify}>Notify</button>
      </Modal>
    </>
  );
}

export default DeleteModal;

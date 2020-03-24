import React from "react";
import { toast } from "react-toastify";

import * as S from "./style";

function DeleteModal({ isModalOpen, toggleModal, linkName, linkId }) {
  function notify() {
    toast("Test");
  }

  return (
    <>
      <S.Modal isOpen={isModalOpen}>
        <S.ModalContent></S.ModalContent>
      </S.Modal>
    </>
  );
}

export default DeleteModal;

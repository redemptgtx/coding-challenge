import styled from "styled-components";

import { TransparentButton } from "../shared";

const Modal = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`;

const CloseButton = styled(TransparentButton)`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export { Modal, ModalContent, CloseButton };

import styled from "styled-components";

const AddLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
`;

const AddLinkButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px #000 solid;
  border-radius: 5%;
  background-color: #f0f0f0;
  font-size: 60px;
  text-align: center;
  padding: 7px;
`;

const AddLinkTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export { AddLink, AddLinkButton, AddLinkTitle };

import styled from "styled-components";

import { TransparentButton } from "../shared";

const RemoveButton = styled(TransparentButton)`
  position: absolute;
  display: none;
  top: -5px;
  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ce2121;
  color: #ffffff;
`;

const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  max-height: 100px;
  background-color: transparent;
  border-radius: 20px;
  transition: all 0.2s ease-out;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    background-color: #f0f0f0;
    transition: all 0.3s ease-out;
    transform: translate3d(5px, 5px, 20px);
    ${RemoveButton} {
      display: block;
    }
  }
`;

const VoteCountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px #000 solid;
  border-radius: 5%;
  background-color: #f0f0f0;
`;

const PointsText = styled.span`
  color: #000;
  font-size: 14px;
  text-transform: uppercase;
`;

const PointCount = styled(PointsText)`
  padding-bottom: 5px;
  font-size: 28px;
  font-weight: 700;
`;

const LinkBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
`;

const LinkInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkTitle = styled.h1`
  color: #000;
  font-size: 20px;
  padding-bottom: 5px;
`;

const LinkAddress = styled.h2`
  color: #0000aa;
  font-size: 18px;
`;

const VoteButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VoteButton = styled(TransparentButton)`
  display: flex;
  align-items: center;
`;

const VoteButtonText = styled.span`
  margin-left: 5px;
`;

export {
  LinkItem,
  VoteCountBox,
  PointCount,
  PointsText,
  LinkBody,
  LinkInfoContainer,
  LinkTitle,
  LinkAddress,
  VoteButtonsContainer,
  VoteButton,
  VoteButtonText,
  RemoveButton
};

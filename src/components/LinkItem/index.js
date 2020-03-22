import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaMinus } from "react-icons/fa";

import DeleteModal from "../Modal";

import * as S from "./style";

function LinkItem() {
  const [isModalOpen, setModalStatus] = useState(false);

  function toggleModal() {
    setModalStatus(!isModalOpen);
  }

  return (
    <S.LinkItem>
      <S.VoteCountBox>
        <S.PointCount>6</S.PointCount>
        <S.PointsText>points</S.PointsText>
      </S.VoteCountBox>
      <S.LinkBody>
        <S.LinkInfoContainer>
          <S.LinkTitle>Hacker News</S.LinkTitle>
          <S.LinkAddress>(https://news.ycombinator.com/)</S.LinkAddress>
        </S.LinkInfoContainer>
        <S.VoteButtonsContainer>
          <S.VoteButton>
            <FaArrowUp />
            <S.VoteButtonText>Up Vote</S.VoteButtonText>
          </S.VoteButton>
          <S.VoteButton>
            <FaArrowDown />
            <S.VoteButtonText>Down Vote</S.VoteButtonText>
          </S.VoteButton>
        </S.VoteButtonsContainer>
      </S.LinkBody>
      <S.RemoveButton onClick={toggleModal}>
        <FaMinus />
      </S.RemoveButton>
      <DeleteModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </S.LinkItem>
  );
}

export default LinkItem;

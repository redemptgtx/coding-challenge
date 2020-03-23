import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaMinus } from "react-icons/fa";
import { remove } from "lodash";
import moment from "moment";

import { getData } from "utils/storage";

import DeleteModal from "../Modal";

import * as S from "./style";

function LinkItem({ link, sortLinks }) {
  const [isModalOpen, setModalStatus] = useState(false);

  function toggleModal() {
    setModalStatus(!isModalOpen);
  }

  function upVote() {
    const newLinkData = link;
    newLinkData.voteCount = newLinkData.voteCount + 1;
    newLinkData.updatedAt = moment();
    updateLink(newLinkData);
  }

  function downVote() {
    const newLinkData = link;
    newLinkData.voteCount = newLinkData.voteCount - 1;
    newLinkData.updatedAt = moment();
    updateLink(newLinkData);
  }

  function updateLink(newLinkData) {
    const links = getAllLinks();

    const dataWithoutOldLink = remove(links, link => {
      return link.key !== newLinkData.key;
    });

    const dataToSet = [...dataWithoutOldLink, newLinkData];

    sortLinks(dataToSet);
  }

  function getAllLinks() {
    return getData("links");
  }

  const { linkName, linkURL, voteCount } = link;

  return (
    <S.LinkItem>
      <S.VoteCountBox>
        <S.PointCount>{voteCount}</S.PointCount>
        <S.PointsText>points</S.PointsText>
      </S.VoteCountBox>
      <S.LinkBody>
        <S.LinkInfoContainer>
          <S.LinkTitle>{linkName}</S.LinkTitle>
          <S.LinkAddress>({linkURL})</S.LinkAddress>
        </S.LinkInfoContainer>
        <S.VoteButtonsContainer>
          <S.VoteButton onClick={upVote}>
            <FaArrowUp />
            <S.VoteButtonText>Up Vote</S.VoteButtonText>
          </S.VoteButton>
          <S.VoteButton onClick={downVote}>
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

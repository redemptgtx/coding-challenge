import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import * as S from "./style";

const RenderPageButtons = ({ totalPage, currentPage }) => {
  let buttons = [];
  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <S.Page selected={currentPage === i} key={uuidv4()}>
        {i}
      </S.Page>
    );
  }
  return buttons;
};

const Pagination = ({ totalPage, currentPage }) => (
  <S.Pagination>
    <S.PrevOrNext isDisabled={currentPage === 1}>
      <FaAngleLeft />
    </S.PrevOrNext>
    <RenderPageButtons totalPage={totalPage} currentPage={currentPage} />
    <S.PrevOrNext isDisabled={currentPage === totalPage}>
      <FaAngleRight />
    </S.PrevOrNext>
  </S.Pagination>
);

Pagination.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number
};

Pagination.defaultProps = {
  totalPage: 5,
  currentPage: 1
};

export default Pagination;

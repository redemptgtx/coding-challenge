import React from "react";
import PropTypes from "prop-types";
import { v1 as uuidv1 } from "uuid";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import * as S from "./style";

const RenderPageButtons = ({ totalPage, currentPage, setPage }) => {
  let buttons = [];
  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <S.Page
        selected={currentPage === i}
        key={uuidv1()}
        onClick={() => setPage(i)}
      >
        {i}
      </S.Page>
    );
  }
  return buttons;
};

const Pagination = ({ totalPage, currentPage, setPage }) => (
  <S.Pagination>
    <S.PrevOrNext
      isDisabled={currentPage === 1}
      onClick={() => setPage(currentPage - 1)}
    >
      <FaAngleLeft />
    </S.PrevOrNext>
    <RenderPageButtons
      totalPage={totalPage}
      currentPage={currentPage}
      setPage={setPage}
    />
    <S.PrevOrNext
      isDisabled={currentPage === totalPage}
      onClick={() => setPage(currentPage + 1)}
    >
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

import React from "react";

import * as S from "./style";

const SelectInput = props => (
  <S.SelectInput {...props}>
    <option value="" selected disabled hidden>
      Order By
    </option>
    <option value="asc">Most Voted(Z -> A)</option>
    <option value="desc">Less Voted(A -> Z)</option>
  </S.SelectInput>
);

export default SelectInput;

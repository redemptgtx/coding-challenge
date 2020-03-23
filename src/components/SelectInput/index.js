import React from "react";

import * as S from "./style";

const SelectInput = props => (
  <S.SelectInput {...props}>
    <option value="" selected disabled hidden>
      Order By
    </option>
    <option value="desc">Most Voted(Z -> A)</option>
    <option value="asc">Less Voted(A -> Z)</option>
  </S.SelectInput>
);

export default SelectInput;

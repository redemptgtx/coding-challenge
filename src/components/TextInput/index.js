import React from "react";

import * as S from "./style";

const TextInput = ({ label, placeholder }) => (
  <S.InputContainer>
    <S.InputLabel>{label}</S.InputLabel>
    <S.TextInput placeholder={placeholder} />
  </S.InputContainer>
);

export default TextInput;

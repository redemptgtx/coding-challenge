import React from "react";
import { omit } from "lodash";

import * as S from "./style";

const TextInput = props => {
  const { label } = props;
  const inputProps = omit(props, ["label"]);
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.TextInput {...inputProps} />
    </S.InputContainer>
  );
};

export default TextInput;

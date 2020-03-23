import React from "react";
import { omit } from "lodash";

import * as S from "./style";

const TextInput = props => {
  const { label, placeholder } = props;
  const inputProps = omit(props, ["label", "placeholder"]);
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.TextInput placeholder={placeholder} {...inputProps} />
    </S.InputContainer>
  );
};

export default TextInput;

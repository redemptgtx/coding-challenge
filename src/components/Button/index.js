import React from "react";
import { omit } from "lodash";

import * as S from "./style";

const Button = props => {
  const { children } = props;
  const inputProps = omit(props, "children");
  return <S.Button {...inputProps}>{children}</S.Button>;
};

export default Button;

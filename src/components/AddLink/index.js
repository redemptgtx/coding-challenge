import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

const AddLink = () => (
  <Link to="/add-link">
    <S.AddLink>
      <S.AddLinkButton>+</S.AddLinkButton>
      <S.AddLinkTitle>Submit a link</S.AddLinkTitle>
    </S.AddLink>
  </Link>
);

export default AddLink;

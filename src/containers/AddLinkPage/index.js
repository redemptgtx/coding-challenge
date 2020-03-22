import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import * as S from "./style";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

function AddLinkPage() {
  let history = useHistory();

  function handleGoBack() {
    history.goBack();
  }
  return (
    <S.PageContainer>
      <S.GoBackButton onClick={handleGoBack}>
        <FaArrowLeft />
        <S.GoBackText>Return To List</S.GoBackText>
      </S.GoBackButton>
      <S.PageTitle>Add New Link</S.PageTitle>
      <TextInput label="Link Name:" placeholder="e.g Alphabet" />
      <TextInput label="Link URL:" placeholder="e.g http://abc.xyz" />
      <S.ButtonContainer>
        <Button>Add</Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}

export default AddLinkPage;

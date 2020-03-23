import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import { setData, getData } from "utils/storage";
import { generateId } from "utils/helpers";

import * as S from "./style";

import TextInput from "components/TextInput";
import Button from "components/Button";

function AddLinkPage() {
  let history = useHistory();
  const [linkName, setLinkName] = useState(null);
  const [linkURL, setLinkURL] = useState(null);

  function handleGoBack() {
    history.goBack();
  }

  function saveLink() {
    const links = getData("links");
    const newLinkData = {
      key: generateId(),
      linkName,
      linkURL,
      voteCount: 0,
      createdAt: moment(),
      updatedAt: null
    };
    if (links) {
      links.push(newLinkData);
      setData(links, "links");
    } else {
      setData([newLinkData], "links");
    }

    toast.success(`${linkName} added`, {
      position: toast.POSITION.TOP_CENTER,
      onClose: () => handleGoBack()
    });
  }

  return (
    <S.PageContainer>
      <S.GoBackButton onClick={handleGoBack}>
        <FaArrowLeft />
        <S.GoBackText>Return To List</S.GoBackText>
      </S.GoBackButton>
      <S.PageTitle>Add New Link</S.PageTitle>
      <TextInput
        label="Link Name:"
        placeholder="e.g Alphabet"
        value={linkName}
        onChange={e => setLinkName(e.target.value)}
      />
      <TextInput
        label="Link URL:"
        placeholder="e.g http://abc.xyz"
        value={linkURL}
        onChange={e => setLinkURL(e.target.value)}
      />
      <S.ButtonContainer>
        <Button onClick={saveLink}>Add</Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}

export default AddLinkPage;

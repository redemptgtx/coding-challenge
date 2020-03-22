import styled from "styled-components";

import { TransparentButton } from "../../components/shared";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PageTitle = styled.h1`
  text-align: left;
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0;
`;

const GoBackButton = styled(TransparentButton)`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 20px 0;
`;

const GoBackText = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export { PageContainer, PageTitle, GoBackButton, GoBackText, ButtonContainer };

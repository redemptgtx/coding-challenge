import styled from "styled-components";

import { TransparentButton } from "../shared";

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const PrevOrNext = styled(TransparentButton)`
  font-size: 24px;
  ${props => props.isDisabled && "pointer-events: none; color: #808080;"}
`;

const Page = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
  margin-right: 8px;
  ${props => props.selected && "border: 1px solid #000000;"}
`;

export { Pagination, PrevOrNext, Page };

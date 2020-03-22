import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #24292e;
`;

const HeaderText = styled.h1`
  padding: 0 10px;
  color: #fff;
`;

export { Header, HeaderText };

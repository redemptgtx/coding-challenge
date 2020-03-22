import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 750px;
    padding: 0;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export { Container };

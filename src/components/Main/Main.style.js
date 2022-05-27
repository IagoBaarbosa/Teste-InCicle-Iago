import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  background-color: #f2f2;
  grid-template-columns: 3fr 1fr;
  gap: ${(props) => props.gutter};

  max-width: ${(props) => props.container};
  margin: 0 auto;
  padding: 580px 10px 0;

  @media (max-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    padding-top: 20px;
  }
`;

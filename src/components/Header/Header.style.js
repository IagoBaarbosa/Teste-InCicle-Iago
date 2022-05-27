import { style } from "@mui/system";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  backgroud: #ffffff;
  padding: 8px 42px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 500ms;

  &:hover {
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

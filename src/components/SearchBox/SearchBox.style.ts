import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 354px;
  background: #ffffff;
  border-radius: 4px;
  height: 32px;
  padding: 0rem 0.8rem;
`;

export const SearchInput = styled.input`
  color: ${tokens.color.subtleText};
  width: 100%;
  border: none;
  "&:focus-within" {
    border: none;
  }
`;

import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  background-color: ${tokens.backgroundColor.primary};
  width: 100vw;
  align-items: center;
  position: absolute;
  top: 0px;
  padding: 0rem 0.5rem;
`;

export const LeftWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightWrapper = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  margin-right: 12px;
  justify-content: flex-end;
  button {
    border: none;
    background: transparent;
    width: auto;
    height: auto;
    padding: 2px;
  }
  img {
    margin-left: 6px;
  }
`;

export const UserName = styled.p`
  color: ${tokens.color.whiteText};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const LogoWrapper = styled.div`
  margin-left: 12px;
`;

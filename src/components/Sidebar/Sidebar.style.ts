import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 12%;
  height: 100vh;
  margin-top: 3.5rem;
  border-right: 1px solid #ECF1F4;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow:hidden;
    li {
      cursor: pointer;
      list-style: none;
      background-image: none;
      background-repeat: none;
      background-position: 0;
      display: flex;
      align-items: center;
      height: 56px;
      width: 100%;
      padding-left: 10px;
      p {
        color: ${tokens.color.bodyText}
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        padding-left: 16px;
      }
    }
    .active {
      background: ${tokens.backgroundColor.sidebarSelected};
      box-shadow: 2px 0px 0px #811434;
      border-right: 1px solid ${tokens.backgroundColor.primary};
      p {
        color: ${tokens.color.primary};
      }
    }
  }
`;

import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const StyledTable = styled.table`
  border-collapse: collapse;
  th {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: left;
    color: ${tokens.color.bodyText};
    padding: 0.5rem 0rem;
  }
  tr {
    border: 1px #ecf1f4;
    border-style: solid none;
  }
  td {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .thin-text {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${tokens.color.subtleText};
  }
  .dark-text {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${tokens.color.darkText};
  }
  .wine-name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${tokens.color.darkText};
  }
  .expand-button {
    outline: none;
    border: none;
    background: transparent;
  }
`;

export const TableRating = styled.div`
  background: ${tokens.backgroundColor.frozen};
  border-radius: 4px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: ${tokens.color.bodyText};
  height: 30px;
  width: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const ExpandedView = styled.div`
  display: flex;
  .left {
    width: 15%;
  }
  .right {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ExpandedDivider = styled.hr`
  border-top: "1px solid #E7E7E7";
`;

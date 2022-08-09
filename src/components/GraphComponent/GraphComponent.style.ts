import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const GraphToolTip = styled.div`
  width: 77px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  background: ${tokens.color.bodyText};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${tokens.color.whiteText};
  text-align: center;
  border-radius: 3px;
`;

import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const OverviewWrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 258px;
  height: 88px;
  padding: 12px;
  margin-top: 12px;
`;

export const OrderName = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 4px;
  color: ${tokens.color.subtleText};
`;

export const OrderCount = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${tokens.color.blackText};
`;

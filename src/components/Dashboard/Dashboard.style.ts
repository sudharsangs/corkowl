import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const DashboardWrapper = styled.main`
  display: flex;
  width: 100vw;
`;

export const DashboardContentWrapper = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  margin-top: 3.5rem;
`;

export const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OverviewText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${tokens.color.subtleText};
`;

export const AddWineButton = styled.button`
  background: ${tokens.backgroundColor.secondary};
  color: ${tokens.color.lightState};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const OverviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.3rem;
`;

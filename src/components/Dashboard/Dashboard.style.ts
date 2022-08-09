import styled from "@emotion/styled";
import { tokens } from "../../styleConfig";

export const DashboardWrapper = styled.main`
  display: flex;
  width: 100vw;
`;

export const DashboardContentWrapper = styled.section`
  width: 83%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px 45px;
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

export const SalesSubHeading = styled.h3`
  color: ${tokens.color.darkText};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const SalesOverViewWrapper = styled.div`
  background: #ffffff;
  padding: 12px;
  border: ${`1px solid ${tokens.backgroundColor.peach}`};
  border-radius: 4px;
  margin-top: 2rem;
`;

export const SalesOverViewText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${tokens.color.darkText};
`;

export const DateRange = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #868686;
`;

export const RefreshText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${tokens.color.bodyText};
`;

export const RevenueAmount = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${tokens.color.darkText};
`;

export const FilterText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${tokens.color.subtleText};
`;

export const Divider = styled.hr`
  border-top: ${`1px solid ${tokens.backgroundColor.peach}`};
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PercentageText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${tokens.color.successText};
`;

export const VerticalLine = styled.div`
  border-left: ${`1px solid ${tokens.backgroundColor.peach}`};
  height: 600px;
`;

export const SalesContentWrapper = styled.div`
  display: flex;
`;

export const GraphWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ProfitWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ProfitNumber = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 4px;
  color: ${tokens.color.primary};
`;

export const TotalNumber = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 4px;
  color: ${tokens.color.darkText};
`;

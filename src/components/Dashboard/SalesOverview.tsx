import { GraphComponent } from "../GraphComponent";
import { GraphIcon } from "../Icons/GraphIcon";
import { RevenueIcon } from "../Icons/RevenueIcon";
import {
  SalesOverViewWrapper,
  OverviewHeader,
  SalesOverViewText,
  DateRange,
  RefreshText,
  Divider,
  SalesContentWrapper,
  GraphWrapper,
  RevenueAmount,
  FlexWrapper,
  PercentageText,
  VerticalLine,
  ProfitWrapper,
  FilterText,
  ProfitNumber,
  TotalNumber,
} from "./Dashboard.style";

export const SalesOverview = () => {
  return (
    <SalesOverViewWrapper>
      <OverviewHeader>
        <div>
          <SalesOverViewText>Total Sales Overview</SalesOverViewText>
          <DateRange>7 - 13 Aug,2020</DateRange>
        </div>
        <RefreshText>Refresh Metrics</RefreshText>
      </OverviewHeader>
      <Divider />
      <SalesContentWrapper>
        <GraphWrapper>
          <OverviewHeader>
            <div>
              <RevenueAmount>$74,729.00</RevenueAmount>
              <FlexWrapper style={{ marginBottom: "1.5rem" }}>
                <GraphIcon />
                <PercentageText>+21% from last week</PercentageText>
              </FlexWrapper>
            </div>

            <FlexWrapper>
              <RevenueIcon />
              <SalesOverViewText>
                Highest Revenue since 2 weeks ago
              </SalesOverViewText>
            </FlexWrapper>
          </OverviewHeader>
          <GraphComponent />
        </GraphWrapper>
        <VerticalLine />
        <ProfitWrapper>
          <FilterText>Total Profit</FilterText>
          <ProfitNumber>$12,545.00</ProfitNumber>
          <FlexWrapper>
            <GraphIcon />
            <PercentageText>+21% from last week</PercentageText>
          </FlexWrapper>
          <div style={{ marginTop: 30 }} />
          <FilterText>Total Products Sold</FilterText>
          <TotalNumber>329</TotalNumber>
        </ProfitWrapper>
      </SalesContentWrapper>
    </SalesOverViewWrapper>
  );
};

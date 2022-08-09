import { GraphComponent } from "../GraphComponent";
import { Header } from "../Header";
import { AddIcon } from "../Icons/AddIcon";
import { GraphIcon } from "../Icons/GraphIcon";
import { RevenueIcon } from "../Icons/RevenueIcon";
import { OverViewComponent } from "../OverviewComponent";
import { Sidebar } from "../Sidebar";
import {
  AddWineButton,
  DashboardContentWrapper,
  DashboardWrapper,
  DateRange,
  Divider,
  FilterText,
  FlexWrapper,
  GraphWrapper,
  OverviewHeader,
  OverviewsWrapper,
  OverviewText,
  PercentageText,
  ProfitNumber,
  ProfitWrapper,
  RefreshText,
  RevenueAmount,
  SalesContentWrapper,
  SalesOverViewText,
  SalesOverViewWrapper,
  SalesSubHeading,
  TotalNumber,
  VerticalLine,
} from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <main>
      <Header />
      <DashboardWrapper>
        <Sidebar />
        <DashboardContentWrapper>
          <OverviewHeader>
            <OverviewText>Overview</OverviewText>
            <AddWineButton>
              <AddIcon />
              Add New Wine
            </AddWineButton>
          </OverviewHeader>
          <OverviewsWrapper>
            <OverViewComponent orderType="open" orderCount={239} />
            <OverViewComponent orderType="transit" orderCount={126} />
            <OverViewComponent orderType="fulfilled" orderCount={239} />
            <OverViewComponent orderType="cancelled" orderCount={239} />
          </OverviewsWrapper>
          <SalesSubHeading>Sales Details</SalesSubHeading>
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
                <OverviewHeader
                >
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
              <VerticalLine/>
              <ProfitWrapper>
                <FilterText>Total Profit</FilterText>
                <ProfitNumber>$12,545.00</ProfitNumber>
                <FlexWrapper>
                  <GraphIcon />
                  <PercentageText>+21% from last week</PercentageText>
                </FlexWrapper>
                <div style={{marginTop: 30}}/>
                <FilterText>Total Products Sold</FilterText>
                <TotalNumber>329</TotalNumber>
              </ProfitWrapper>
            </SalesContentWrapper>
          </SalesOverViewWrapper>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </main>
  );
};

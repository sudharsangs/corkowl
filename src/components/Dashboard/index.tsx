import { Header } from "../Header";
import { AddIcon } from "../Icons/AddIcon";
import { OverViewComponent } from "../OverviewComponent";
import { Sidebar } from "../Sidebar";
import {
  AddWineButton,
  DashboardContentWrapper,
  DashboardWrapper,
  OverviewHeader,
  OverviewsWrapper,
  OverviewText,
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
        </DashboardContentWrapper>
      </DashboardWrapper>
    </main>
  );
};

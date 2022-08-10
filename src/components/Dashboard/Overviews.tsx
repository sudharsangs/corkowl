import { OverViewComponent } from "../OverviewComponent";
import { OverviewsWrapper } from "./Dashboard.style";

export const Overviews = () => {
  return (
    <OverviewsWrapper>
      <OverViewComponent orderType="open" orderCount={239} />
      <OverViewComponent orderType="transit" orderCount={126} />
      <OverViewComponent orderType="fulfilled" orderCount={239} />
      <OverViewComponent orderType="cancelled" orderCount={239} />
    </OverviewsWrapper>
  );
};

import { ReactElement } from "react";
import { OverviewHeader } from "../Dashboard/Dashboard.style";
import { CancelledOrder } from "../Icons/CancelledOrder";
import { FulfilledOrders } from "../Icons/FulfilledOrders";
import { OpenOrders } from "../Icons/OpenOrders";
import { TransitOrders } from "../Icons/TransitOrders";
import {
  OrderCount,
  OrderName,
  OverviewWrapper,
} from "./OverviewComponent.style";

export const OverViewComponent = ({ orderCount, orderType }: OverViewProps) => {
  const renderIcon = () => {
    switch (orderType) {
      case "open":
        return <OpenOrders />;
      case "transit":
        return <TransitOrders />;
      case "fulfilled":
        return <FulfilledOrders />;
      case "cancelled":
        return <CancelledOrder />;
    }
  };
  const renderTitle = () => {
    switch (orderType) {
      case "open":
        return "Open orders";
      case "transit":
        return "Orders in transit";
      case "fulfilled":
        return "Fulfilled Orders";
      case "cancelled":
        return "Cancelled Orders";
    }
  };
  const getBorderColor = () => {
    switch (orderType) {
      case "open":
        return "#FFAA2C";
      case "transit":
        return "#2C67FF";
      case "fulfilled":
        return "#00CF3A";
      case "cancelled":
        return "#FF1C1C";
    }
  };
  return (
    <OverviewWrapper
      style={{
        boxShadow: ` 0px -2px 0px ${getBorderColor()}, 0px 2px 11px rgba(0, 0, 0, 0.06)`,
      }}
    >
      <OverviewHeader>
        <OrderName>{renderTitle()}</OrderName>
        {renderIcon()}
      </OverviewHeader>
      <OrderCount>{orderCount}</OrderCount>
    </OverviewWrapper>
  );
};

interface OverViewProps {
  orderCount: number;
  orderType: "open" | "transit" | "fulfilled" | "cancelled";
}

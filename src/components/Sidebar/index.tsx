import React from "react";
import { CustomersIcon } from "../Icons/CustomersIcon";
import { DashboardIcon } from "../Icons/DashboardIcon";
import { InventoryIcon } from "../Icons/InventoryIcon";
import { OrdersIcon } from "../Icons/OrdersIcon";
import { ReportsIcon } from "../Icons/ReportsIcon";
import { SettingsIcon } from "../Icons/SettingsIcon";
import { StyledAside } from "./Sidebar.style";

export const Sidebar = () => {
  return (
    <StyledAside>
      <ul>
        <li className="active">
          <DashboardIcon />
          <p>Dashboard</p>
        </li>
        <li>
          <InventoryIcon />
          <p>Inventory</p>
        </li>
        <li>
          <OrdersIcon />
          <p>Orders</p>
        </li>
        <li>
          <CustomersIcon />
          <p>Customers</p>
        </li>
        <li>
          <ReportsIcon />
          <p>Reports</p>
        </li>
        <li>
          <SettingsIcon />
          <p>Settings</p>
        </li>
      </ul>
    </StyledAside>
  );
};

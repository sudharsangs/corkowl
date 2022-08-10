import { useState } from "react";
import { Header } from "../Header";
import { AddIcon } from "../Icons/AddIcon";
import { Inventory } from "../Inventory";
import { Sidebar } from "../Sidebar";
import { AddWineModal } from "./AddWineModal";
import {
  AddWineButton,
  DashboardContentWrapper,
  DashboardWrapper,
  OverviewHeader,
  OverviewText,
  SalesSubHeading,
} from "./Dashboard.style";
import { Overviews } from "./Overviews";
import { SalesOverview } from "./SalesOverview";

export const Dashboard = () => {
  const [inventory, setInventory] = useState<InventoryDataType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <main>
      <Header />
      <DashboardWrapper>
        <Sidebar />
        <AddWineModal
          showModal={showModal}
          setShowModal={setShowModal}
          inventory={inventory}
          setInventory={setInventory}
        />
        <DashboardContentWrapper>
          <OverviewHeader>
            <OverviewText>Overview</OverviewText>
            <AddWineButton onClick={() => setShowModal(true)}>
              <AddIcon />
              Add New Wine
            </AddWineButton>
          </OverviewHeader>
          <Overviews />
          <SalesSubHeading>Sales Details</SalesSubHeading>
          <SalesOverview />
          <SalesSubHeading>Inventory</SalesSubHeading>
          <Inventory inventory={inventory} />
        </DashboardContentWrapper>
      </DashboardWrapper>
    </main>
  );
};

export interface InventoryDataType {
  id: string;
  productName: string;
  region: string;
  rating: {
    js: number | null;
    rp: number | null;
    ag: number | null;
    ws: number | null;
  };
  vintage: number | null;
  qty: number | null;
  volume: string;
  cost: number | null;
  price: number | null;
  stock: {
    place: string;
    units: number | null;
  }[];
}

import { useState } from "react";
import { InventoryDataType } from "../Dashboard";
import { Dropdown } from "../Icons/Dropdown";
import { StyledTable } from "./Inventory.style";

export const Inventory = ({ inventory }: InventoryProps) => {
  const [showDetail, setShowDetail] = useState<string>("-1");
  const handleExpand = (ind: number) => {
    if (showDetail === String(ind)) {
      setShowDetail("-1");
    } else {
      setShowDetail(String(ind));
    }
  };
  return (
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th>PRODUCT</th>
          <th>RATING</th>
          <th>VINTAGE</th>
          <th>QTY</th>
          <th>VOLUME</th>
          <th>COST</th>
          <th>PRICE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {inventory?.map((res, index) => (
          <>
          <tr>
            <td>
              <input type="checkbox" />{" "}
            </td>
            <td className="wine-name">{res.productName}</td>
            <td>RP{res.rating?.rp}</td>
            <td className="thin-text">{res?.vintage}</td>
            <td className="thin-text">{res?.qty}</td>
            <td className="thin-text">{res?.volume}</td>
            <td className="thin-text">${res?.cost}</td>
            <td className="dark-text">${res?.price}</td>
            <td>
              <button onClick={() => handleExpand(index)} className="expand-button">
                <Dropdown invert={showDetail === String(index)} />
              </button>
            </td>
          </tr>
          {showDetail === String(index) ? <h2>ajkajfkj</h2>:null}
          </>
        ))}
      </tbody>
    </StyledTable>
  );
};

interface InventoryProps {
  inventory: InventoryDataType[];
}

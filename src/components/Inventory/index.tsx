import { useState } from "react";
import { InventoryDataType } from "../Dashboard";
import { Dropdown } from "../Icons/Dropdown";
import {
  ExpandedDivider,
  ExpandedView,
  StyledTable,
  TableRating,
} from "./Inventory.style";
import wine1 from "../../assets/wine1.png";
import wine2 from "../../assets/wine2.png";
import wine3 from "../../assets/wine3.png";
import wine4 from "../../assets/wine4.png";
import wine5 from "../../assets/wine5.png";
import wine6 from "../../assets/wine6.png";
import wine7 from "../../assets/wine7.png";
import { FlexWrapper } from "../Dashboard/Dashboard.style";

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
            <tr
              style={{
                borderBottom: showDetail === String(index) ? "none" : "",
              }}
            >
              <td>
                <input type="checkbox" />{" "}
              </td>
              <td>
                <FlexWrapper>
                  <img
                    src={wine1}
                    style={{
                      marginRight: 12,
                    }}
                  />
                  <p className="wine-name">{res.productName}</p>
                </FlexWrapper>
                <p className="thin-text">{res?.region}</p>
              </td>
              <td>
                <TableRating>RP{res.rating?.rp}</TableRating>
              </td>
              <td className="thin-text">{res?.vintage}</td>
              <td className="thin-text">{res?.qty}</td>
              <td className="thin-text">{res?.volume}</td>
              <td className="thin-text">${res?.cost}</td>
              <td className="dark-text">${res?.price}</td>
              <td>
                <button
                  onClick={() => handleExpand(index)}
                  className="expand-button"
                >
                  <Dropdown invert={showDetail === String(index)} />
                </button>
              </td>
            </tr>
            {showDetail === String(index) ? (
                <ExpandedView>
                  <div className="left" />
                  <div className="right">
                    <p className="dark-text">{res?.productName}</p>
                    <ExpandedDivider />
                  </div>
                </ExpandedView>
            ) : null}
          </>
        ))}
      </tbody>
    </StyledTable>
  );
};

interface InventoryProps {
  inventory: InventoryDataType[];
}

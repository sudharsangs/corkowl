import { useState } from "react";
import { InventoryDataType } from "../Dashboard";
import { Dropdown } from "../Icons/Dropdown";
import {
  ExpandedDivider,
  StockUnits,
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
  const renderWineImage = (index: number) => {
    if (index % 7 === 0) {
      return wine7;
    } else if (index % 6 === 0) {
      return wine6;
    } else if (index % 5 === 0) {
      return wine5;
    } else if (index % 4 === 0) {
      return wine4;
    } else if (index % 3 === 0) {
      return wine3;
    } else if (index % 2 === 0) {
      return wine2;
    } else if (index % 1 === 0) {
      return wine1;
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
                    src={renderWineImage(index)}
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
              <tr>
                <td colSpan={8}>
                  <div className="right">
                    <p className="dark-text">{res?.productName}</p>
                    <FlexWrapper>
                      <p className="dark-text">
                        Region:<span className="thin-text">{res?.region}</span>
                      </p>
                      <div style={{ width: 12 }} />
                      <p className="dark-text">
                        Vintage:
                        <span className="thin-text">{res?.vintage}</span>
                      </p>
                    </FlexWrapper>
                    <ExpandedDivider />

                    <FlexWrapper
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <p className="thin-text">RATING</p>
                        <FlexWrapper style={{ flexWrap: "wrap" }}>
                          <div style={{ padding: 12 }}>
                            <p className="dark-text">James Suckling's </p>
                            <TableRating>JS{res?.rating.js}</TableRating>
                          </div>
                          <div style={{ padding: 12 }}>
                            <p className="dark-text">Robert Parker </p>
                            <TableRating>RP{res?.rating.rp}</TableRating>
                          </div>
                          <div style={{ padding: 12 }}>
                            <p className="dark-text">Antonio Galloni’s </p>
                            <TableRating>AG{res?.rating.ag}</TableRating>
                          </div>
                          <div style={{ padding: 12 }}>
                            <p className="dark-text">Wine Spectator Tasting </p>
                            <TableRating>WS{res?.rating.ws}</TableRating>
                          </div>
                        </FlexWrapper>
                      </div>
                      <div style={{ width: "50%" }}>
                        <p className="thin-text">STOCK</p>
                        <FlexWrapper>
                          {res?.stock?.map((res) => (
                            <div style={{ padding: 12 }}>
                              <p className="dark-text">{res?.place}</p>
                              <StockUnits>{res?.units}</StockUnits>
                            </div>
                          ))}
                        </FlexWrapper>
                      </div>
                      <div></div>
                    </FlexWrapper>
                  </div>
                </td>
              </tr>
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

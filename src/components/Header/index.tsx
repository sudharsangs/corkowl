import React from "react";
import { BellIcon } from "../Icons/BellIcon";
import { CorkOwlLogo } from "../Icons/CorkOwlLogo";
import { HeaderDropDown } from "../Icons/HeaderDropDown";
import { SearchBox } from "../SearchBox";
import {
  LeftWrapper,
  LogoWrapper,
  RightWrapper,
  StyledNav,
  UserName,
} from "./Header.style";
import avatar from "../../assets/avatar.png";

export const Header = () => {
  return (
    <StyledNav>
      <LeftWrapper>
        <LogoWrapper>
          <CorkOwlLogo />
        </LogoWrapper>
        <SearchBox
          value=""
          onChange={(e) => console.log("")}
          placeholder="Search wines,customers here..."
        />
      </LeftWrapper>
      <RightWrapper>
        <button>
          <BellIcon />
        </button>
        <UserName>Nicholas D</UserName>
        <img src={avatar} alt="" />
        <button>
          <HeaderDropDown />
        </button>
      </RightWrapper>
    </StyledNav>
  );
};

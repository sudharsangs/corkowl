import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import { SearchInput, SearchWrapper } from "./SearchBox.style";

export const SearchBox = ({ value, onChange, placeholder }: SearchBoxProps) => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
};

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

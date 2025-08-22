import React from "react";
import type { ChangeEvent } from "react";
import { Container, InputWrapper, Icon, Input, ResultsText } from "./SearchBar.styled";
import searchIcon from "@/assets/search.svg";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resultsCount?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, resultsCount }) => {
  return (
    <Container>
      <InputWrapper>
        <Icon src={searchIcon} alt="Search Icon" />
        <Input placeholder="SEARCH A CHARACTER..." value={value} onChange={onChange} />
      </InputWrapper>
      {resultsCount !== undefined && <ResultsText>{resultsCount} RESULTS</ResultsText>}
    </Container>
  );
};

export default SearchBar;

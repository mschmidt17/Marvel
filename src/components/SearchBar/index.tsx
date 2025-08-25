import type { ChangeEvent } from 'react';
import { Container, InputWrapper, Icon, Input, ResultsText } from './SearchBar.styled';
import searchIcon from '@/assets/icon/search.svg';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultsCount?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, resultsCount }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  const resultsLabel =
    resultsCount === undefined
      ? null
      : `${resultsCount} ${resultsCount === 1 ? 'RESULT' : 'RESULTS'}`;

  return (
    <Container>
      <InputWrapper>
        <Icon src={searchIcon} alt="" role="presentation" />
        <Input
          placeholder="SEARCH A CHARACTER..."
          aria-label="Search a character"
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>
      {resultsLabel && <ResultsText>{resultsLabel}</ResultsText>}
    </Container>
  );
};

export default SearchBar;

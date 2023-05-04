// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { fontsObj } from '../../../theme';

// Components
import Icon from '../../Icon/Icon';

// Context
import { useDataContext } from '../../../context/DataContext/DataContextProvider';

export interface ISearchProps {
  placeholder: string;
  data: object[];
}

const Search = ({ placeholder, data }: ISearchProps) => {
  const [value, setValue] = useState('');
  const { handleSearch } = useDataContext();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
    setTimeout(() => {
      handleSearch(data, e.target.value);
    }, 1000);
  };

  return (
    <SearchContainer>
      <Icon type="search" />
      <SearchInput
        type="text"
        placeholder={placeholder}
        style={{ caretColor: '#FC4747' }}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  svg path {
    fill: ${({ theme }) => theme.palette.standard.white};
  }
`;

const SearchInput = styled.input`
  display: flex;
  min-width: 400px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.standard.white};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  margin-left: 1rem;
  font-family: ${fontsObj.headingM.fontFamily};
  font-size: ${fontsObj.headingM.fontSize};
  font-weight: ${fontsObj.headingM.fontWeight};
  caret-width: 2px;
  &:focus {
    border-bottom: 1px solid #5a698f;
  }
`;

export default Search;

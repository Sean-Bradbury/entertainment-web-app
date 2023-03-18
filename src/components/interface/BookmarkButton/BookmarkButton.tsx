// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Icon from '../../../components/Icon/Icon';

export interface IBookmarkButtonProps {
  isBookmarked: boolean;
  callback: () => void;
}

const BookmarkButton = ({
  isBookmarked,
  callback,
}: IBookmarkButtonProps) => {
  const [isBookmarkedState, setIsBookmarkedState] =
    useState(isBookmarked);

  // Handles the checkbox state
  const handleCheckbox = () => {
    setIsBookmarkedState(!isBookmarkedState);
    callback();
  };

  return (
    <Bookmark className="bookmark" aria-label="bookmark-label">
      <input
        type="checkbox"
        checked={isBookmarkedState}
        onChange={handleCheckbox}
      />
      <Icon
        type={isBookmarkedState ? 'bookmark-full' : 'bookmark-empty'}
      />
    </Bookmark>
  );
};

const Bookmark = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.palette.background.light}80;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export default BookmarkButton;

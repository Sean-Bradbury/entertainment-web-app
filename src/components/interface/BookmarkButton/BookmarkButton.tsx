// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Icon from '../../../components/Icon/Icon';

export interface IBookmarkButtonProps {
  isBookmarked: boolean;
  className?: string;
  callback: () => void;
}

const BookmarkButton = ({
  isBookmarked,
  callback,
  className,
}: IBookmarkButtonProps) => {
  const [isBookmarkedState, setIsBookmarkedState] =
    useState(isBookmarked);

  // Handles the checkbox state
  const handleCheckbox = () => {
    setIsBookmarkedState(!isBookmarkedState);
    callback();
  };

  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={isBookmarkedState}
        onChange={handleCheckbox}
      />
      <Icon
        type={isBookmarkedState ? 'bookmark-full' : 'bookmark-empty'}
      />
    </div>
  );
};

const StyledBookmark = styled(BookmarkButton)`
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
  &:hover {
    background-color: ${({ theme }) => theme.palette.standard.white};
    svg {
      path {
        fill: ${({ theme, isBookmarked }) => {
          if (!isBookmarked) {
            return theme.palette.background.contrastText;
          }

          return theme.palette.background.light;
        }};
        stroke: #000;
      }
    }
  }
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export default StyledBookmark;

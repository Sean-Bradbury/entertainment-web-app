// Dependencies
import * as React from 'react';
import styled from 'styled-components';

// Components
import Icon from '../../components/Icon/Icon';
import BookmarkButton from '../interface/BookmarkButton/';

export interface IMediaCardProps {
  item: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  };
}

const MediaCard = ({
  item: {
    title,
    thumbnail,
    year,
    category,
    rating,
    isBookmarked,
    isTrending,
  },
}: IMediaCardProps): JSX.Element => {
  return (
    <TrendingMediaCard
      style={{
        backgroundImage: `url(${thumbnail?.trending?.large})`,
      }}
    >
      <div className="top">
        <BookmarkButton
          isBookmarked={isBookmarked}
          callback={() => console.log('clicked')}
        />
      </div>
      <div className="bottom">
        <div className="bottom-info">
          <span>{year}</span>
          <span>{category}</span>
          <span>{rating}</span>
        </div>
        <div className="bottom-title">{title}</div>
      </div>
    </TrendingMediaCard>
  );
};

const TrendingMediaCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 470px;
  height: 230px;
  padding: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  .top {
    display: flex;
    justify-content: flex-end;
  }
  .bottom {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    color: #fff;
    &-info {
      opacity: 0.75;
      span {
        position: relative;
      }
      span:not(:last-child) {
        margin-right: 26px;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -13px;
          transform: translateY(-50%);
          width: 3px;
          height: 3px;
          background-color: ${({ theme }) =>
            theme.palette.standard.white};
          border-radius: 50%;
        }
      }
    }
    .bottom-title {
      font-family: ${({ theme }) => theme.fonts.headingS.fontFamily};
      font-size: ${({ theme }) => theme.fonts.headingS.fontSize};
      font-weight: ${({ theme }) => theme.fonts.headingS.fontWeight};
    }
  }
`;

export default MediaCard;

// Dependencies
import * as React from 'react';
import styled from 'styled-components';

// Components
import Icon from '../../components/Icon/Icon';

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
      <div className="bottom">
        {isBookmarked ? (
          <div className="bookmark">
            <Icon type="bookmark-full" />
          </div>
        ) : (
          <div className="bookmark">
            <Icon type="bookmark-empty" />
          </div>
        )}
      </div>
      <div className="top"></div>
      {title}
    </TrendingMediaCard>
  );
};

const TrendingMediaCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 470px;
    height: 230px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    .bottom {
    display: flex;
    justify-content: flex-end;
`;

export default MediaCard;

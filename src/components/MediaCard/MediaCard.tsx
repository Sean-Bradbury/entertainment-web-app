// Dependencies
import * as React from 'react';
import styled from 'styled-components';

// Components
import BookmarkButton from '../interface/BookmarkButton/';
import Icon from '../Icon/Icon';

// Hooks
import HandleBookmarkItem from '../../hooks/HandleBookmarkItem';

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
  section?: 'trending';
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
  section,
}: IMediaCardProps): JSX.Element => {
  const [bookmarkItem] = HandleBookmarkItem();
  const [hoverActive, setHoverActive] = React.useState(false);

  const handleActiveCard = (state: boolean) => {
    setHoverActive(state);
  };

  if (section === 'trending')
    return (
      <TrendingMediaCard
        style={{
          backgroundImage: `url(${thumbnail?.trending?.large})`,
        }}
        onMouseOver={() => handleActiveCard(true)}
        onMouseLeave={() => handleActiveCard(false)}
      >
        <div className="top">
          <BookmarkButton
            isBookmarked={isBookmarked}
            callback={() => bookmarkItem(title)}
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
        <PlayButton href="#" className={!hoverActive ? 'hide' : ''}>
          <div>
            <Icon type="play" />
          </div>
          <span>Play</span>
        </PlayButton>
      </TrendingMediaCard>
    );

  return (
    <MediaCardDefault
      onMouseOver={() => handleActiveCard(true)}
      onMouseLeave={() => handleActiveCard(false)}
    >
      <div
        className="top"
        style={{
          backgroundImage: `url(${thumbnail?.regular?.large})`,
        }}
      >
        <div className="top__bookmark-area">
          <BookmarkButton
            isBookmarked={isBookmarked}
            callback={() => bookmarkItem(title)}
          />
        </div>
        <PlayButton href="#" className={!hoverActive ? 'hide' : ''}>
          <div>
            <Icon type="play" />
          </div>
          <span>Play</span>
        </PlayButton>
      </div>
      <div className="bottom">
        <div className="bottom-info">
          <span>{year}</span>
          <span>{category}</span>
          <span>{rating}</span>
        </div>
        <div className="bottom-title">{title}</div>
      </div>
    </MediaCardDefault>
  );
};

const MediaCardDefault = styled.div`
  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 174px;
    padding: 1rem;
    margin-bottom: 8px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    overflow: hidden;
    color: ${({ theme }) => theme.palette.background.contrastText};
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:hover {
      ::before {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .top__bookmark-area {
      display: flex;
      justify-content: flex-end;
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    color: ${({ theme }) => theme.palette.background.contrastText};
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
      font-family: ${({ theme }) => theme.fonts.headingXS.fontFamily};
      font-size: ${({ theme }) => theme.fonts.headingXS.fontSize};
      font-weight: ${({ theme }) => theme.fonts.headingXS.fontWeight};
    }
  }
`;

const TrendingMediaCard = styled.div`
  position: relative;
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
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ::before {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  color: ${({ theme }) => theme.palette.background.contrastText};
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
    z-index: 1;
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

const PlayButton = styled.a`
  display: flex;
  justify-content: center;
  alignd-items: center;
  gap: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 117px;
  height: 48px;
  border: none;
  border-radius: 28px;
  background-color: rgba(250, 250, 250, 0.25);
  font-family: ${({ theme }) => theme.fonts.headingXS.fontFamily};
  font-size: ${({ theme }) => theme.fonts.headingXS.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headingXS.fontWeight};
  color: ${({ theme }) => theme.palette.standard.white};
  * {
    display: flex;
    align-items: center;
  }
  &.hide {
    display: none;
  }
`;

export default MediaCard;

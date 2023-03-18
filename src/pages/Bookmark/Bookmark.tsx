// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';
import Heading from '../../components/Heading';

// Context
import { useDataContext } from '../../context/DataContext/DataContextProvider';

export interface IBookmarkProps {}

const Bookmark = (props: IBookmarkProps) => {
  const { data } = useDataContext();
  const bookmarkedMovies = data?.filter(
    (item: any) => item.isBookmarked
  );
  const bookmarkedTVSeries = data?.filter(
    (item: any) => item.isBookmarked
  );

  return (
    <BookmarkContainer>
      <Heading type="hl">Bookmarked Movies</Heading>
      <BookmarkSection>
        {bookmarkedMovies?.map((item: any) => {
          if (item.category === 'TV Series') return null;

          return <MediaCard item={item} key={item.title} />;
        })}
      </BookmarkSection>
      <Heading type="hl">Bookmarked TV Series</Heading>
      <BookmarkSection>
        {bookmarkedTVSeries?.map((item: any) => {
          if (item.category === 'Movie') return null;

          return <MediaCard item={item} key={item.title} />;
        })}
      </BookmarkSection>
    </BookmarkContainer>
  );
};

const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BookmarkSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Bookmark;

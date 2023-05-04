// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';
import Heading from '../../components/Heading';
import RecommendedSection from '../../components/RecommendedSection';
import Search from '../../components/interface/Search';

// Context
import { useDataContext } from '../../context/DataContext/DataContextProvider';

export interface IBookmarkProps {}

const Bookmark = (props: IBookmarkProps) => {
  const { data, searchedData, searchValue } = useDataContext();
  const bookmarkedMovies = data?.filter(
    (item: any) => item.isBookmarked
  );
  const bookmarkedTVSeries = data?.filter(
    (item: any) => item.isBookmarked
  );

  return (
    <BookmarkContainer>
      <Search
        placeholder="Search for Movies or TV Series"
        data={data?.filter((item: any) => item?.isBookmarked)}
      />
      {searchedData?.length >= 0 ? (
        <>
          <Heading type="hl">
            Found {searchedData.length} results for{' '}
            {`'${searchValue}'`}
          </Heading>
          <RecommendedSection>
            {searchedData?.map((item: any) => {
              return <MediaCard item={item} key={item.title} />;
            })}
          </RecommendedSection>
        </>
      ) : (
        <>
          <Heading type="hl">Bookmarked Movies</Heading>
          <RecommendedSection>
            {bookmarkedMovies?.map((item: any) => {
              if (item.category === 'TV Series') return null;

              return <MediaCard item={item} key={item.title} />;
            })}
          </RecommendedSection>
          <Heading type="hl">Bookmarked TV Series</Heading>
          <RecommendedSection>
            {bookmarkedTVSeries?.map((item: any) => {
              if (item.category === 'Movie') return null;

              return <MediaCard item={item} key={item.title} />;
            })}
          </RecommendedSection>
        </>
      )}
    </BookmarkContainer>
  );
};

const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Bookmark;

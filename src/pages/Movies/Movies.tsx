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

export interface IHomeProps {}

const Movies = (props: IHomeProps) => {
  const { data, searchedData, searchValue } = useDataContext();

  return (
    <MoviesContainer>
      <Search
        placeholder="Search for Movies"
        data={data.filter((item: any) => item?.category === 'Movies')}
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
          <Heading type="hl">Movies</Heading>
          <RecommendedSection>
            {data?.map((item: any) => {
              if (item.category === 'TV Series') return null;

              return <MediaCard item={item} key={item.title} />;
            })}
          </RecommendedSection>
        </>
      )}
    </MoviesContainer>
  );
};

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Movies;

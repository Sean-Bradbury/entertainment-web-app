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

export interface ITVProps {}

const TV = (props: ITVProps) => {
  const { data, searchValue, searchedData } = useDataContext();

  return (
    <TVContainer>
      <Search
        placeholder="Search for a TV Series"
        data={data.filter(
          (item: any) => item?.category === 'TV Series'
        )}
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
          <Heading type="hl">TV Series</Heading>
          <RecommendedSection>
            {data?.map((item: any) => {
              if (item.category === 'Movie') return null;

              return <MediaCard item={item} key={item.title} />;
            })}
          </RecommendedSection>
        </>
      )}
    </TVContainer>
  );
};

const TVContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default TV;

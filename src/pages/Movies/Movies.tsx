// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';
import Heading from '../../components/Heading';

// Context
import { useDataContext } from '../../context/DataContext/DataContextProvider';

export interface IHomeProps {}

const Movies = (props: IHomeProps) => {
  const { data } = useDataContext();

  return (
    <MoviesContainer>
      <Heading type="hl">Movies</Heading>
      <MovieSection>
        {data?.map((item: any) => {
          if (item.category === 'TV Series') return null;

          return <MediaCard item={item} key={item.title} />;
        })}
      </MovieSection>
    </MoviesContainer>
  );
};

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MovieSection = styled.section`
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

export default Movies;

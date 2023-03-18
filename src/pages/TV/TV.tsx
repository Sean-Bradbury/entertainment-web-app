// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';
import Heading from '../../components/Heading';

// Context
import { useDataContext } from '../../context/DataContext/DataContextProvider';

export interface ITVProps {}

const TV = (props: ITVProps) => {
  const { data } = useDataContext();

  return (
    <TVContainer>
      <Heading type="hl">TV Series</Heading>
      <TVSection>
        {data?.map((item: any) => {
          if (item.category === 'Movie') return null;

          return <MediaCard item={item} key={item.title} />;
        })}
      </TVSection>
    </TVContainer>
  );
};

const TVContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TVSection = styled.section`
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

export default TV;

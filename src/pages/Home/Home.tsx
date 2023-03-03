// Dependencies
import * as React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';

export interface IHomeProps {
  data: object[];
}

const Home = ({ data }: IHomeProps) => {
  return (
    <TrendingSection>
      {data?.map((item: any) => {
        if (!item.isTrending) return null;

        return <MediaCard item={item} />;
      })}
    </TrendingSection>
  );
};

const TrendingSection = styled.section`
  display: flex;
  gap: 40px;
`;

export default Home;

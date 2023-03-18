// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';
import Heading from '../../components/Heading';

// Context
import { useDataContext } from '../../context/DataContext/DataContextProvider';

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const { data } = useDataContext();

  /**
   * Handle wheel event on trending section
   * @param e wheel event
   * @returns void
   */
  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    const element = e.currentTarget;
    if (e.deltaY === 0) return;

    element.scrollTo({
      left: element.scrollLeft + (e.deltaY > 0 ? 1 : -1) * 510,
      behavior: 'smooth',
    });
  };

  return (
    <HomeContainer>
      <Heading type="hl">Trending</Heading>
      <TrendingSection onWheel={(e) => handleWheel(e)}>
        {data?.map((item: any) => {
          if (!item.isTrending) return null;

          return (
            <MediaCard
              item={item}
              key={item.title}
              section="trending"
            />
          );
        })}
      </TrendingSection>
      <Heading type="hl">Recommended for you</Heading>
      <RecommendedSection>
        {data?.map((item: any) => {
          return <MediaCard item={item} key={item.title} />;
        })}
      </RecommendedSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TrendingSection = styled.section`
  display: flex;
  height: 250px;
  gap: 40px;
  overflow-x: auto;
  overscroll-behavior: contain;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const RecommendedSection = styled.section`
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

export default Home;

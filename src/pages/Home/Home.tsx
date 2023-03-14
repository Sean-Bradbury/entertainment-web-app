// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MediaCard from '../../components/MediaCard/';

export interface IHomeProps {
  data: object[];
}

const Home = ({ data }: IHomeProps) => {
  /**
   * Handle wheel event on trending section
   * @param e wheel event
   * @returns void
   */
  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    const element = e.currentTarget;

    if (e.deltaY === 0) return;

    element.scrollTo({
      left: element.scrollLeft + e.deltaY,
      behavior: 'smooth',
    });
  };

  return (
    <TrendingSection onWheel={(e) => handleWheel(e)}>
      {data?.map((item: any) => {
        if (!item.isTrending) return null;

        return <MediaCard item={item} key={item.title} />;
      })}
    </TrendingSection>
  );
};

const TrendingSection = styled.section`
  display: flex;
  height: 300px;
  gap: 40px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default Home;

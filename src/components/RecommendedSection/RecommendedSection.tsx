import * as React from 'react';
import styled from 'styled-components';

export interface RecommendedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const RecommendedSection = ({
  children,
  className,
}: RecommendedSectionProps) => {
  return <div className={className}>{children}</div>;
};

const RecommendedSectionStyled = styled(RecommendedSection)`
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

export default RecommendedSectionStyled;
